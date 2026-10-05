import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prismaservice/prismaservice.service';
import { BalanceService } from 'src/balance/balance.service';
import { SettlementRepository } from './settlement.repository';
import { toNumber } from 'src/common/decimal.util';
import { isDepositCharge } from 'src/common/charge-type.util';
import { toUtcDateOnly, wholeDaysBetween } from 'src/common/date.util';
import {
  DepositRefund,
  NoticeCompliance,
  RecordSettlementInput,
  SettlementPreview,
  SuggestedDeduction,
} from 'src/types/settlement';
import { OutstandingCharge } from 'src/types/balance';
import { Prisma, Tenancy } from 'generated/prisma/client';

@Injectable()
export class SettlementService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly balanceService: BalanceService,
    private readonly settlementRepository: SettlementRepository,
  ) {}

  async getSettlement(tenancyId: string): Promise<DepositRefund> {
    const settlement = await this.settlementRepository.findByTenancy(tenancyId);
    if (!settlement) {
      throw new NotFoundException(`No deposit settlement recorded for tenancy ${tenancyId}`);
    }
    return settlement;
  }

  // 5.2 — the computed read that answers "what should happen here",
  // without writing anything. Reachable on its own (GET .../preview, at
  // ANY tenancy status, so the owner can review before vacating at all)
  // and also called from inside TenancyService.vacate's own transaction
  // so the vacate response carries the just-committed numbers.
  async buildPreview(
    tenancyId: string,
    client: Prisma.TransactionClient = this.prismaService,
  ): Promise<SettlementPreview> {
    const now = new Date(); // captured once, so a request crossing midnight can't classify against two different "today"s
    const tenancy = await client.tenancy.findUnique({ where: { id: tenancyId } });
    if (!tenancy) {
      throw new NotFoundException(`Tenancy ${tenancyId} not found`);
    }

    const [deposit, outstanding, unallocatedCredit, existingSettlement] = await Promise.all([
      this.balanceService.getDepositHeld(tenancyId, client),
      this.balanceService.getOutstandingCharges(tenancyId, client),
      this.balanceService.getUnallocatedCredit(tenancyId, client),
      this.settlementRepository.findByTenancy(tenancyId, client),
    ]);

    // 5.2 — an UNPAID deposit is not a deduction. You cannot deduct from
    // money that never arrived; it is simply deposit that was never paid,
    // and it's already reflected in a lower deposit.held. Suggesting it
    // here would double-count the same shortfall and zero out a refund
    // the tenant may genuinely be owed.
    const arrearsCharges = outstanding.filter((c) => !isDepositCharge(c.type));
    const suggestedDeductions: SuggestedDeduction[] = arrearsCharges.map((c) => this.describeArrears(c));
    const arrearsTotal = suggestedDeductions.reduce((sum, d) => sum + d.amount, 0);
    const totalOutstandingIncludingDeposit = outstanding.reduce((sum, c) => sum + c.outstanding, 0);

    const noticeCompliance = this.assessNoticeCompliance(tenancy, now);

    return {
      tenancyId,
      tenancyStatus: tenancy.status,
      canSettle: tenancy.status === 'VACATED' && !existingSettlement,
      alreadySettled: !!existingSettlement,
      deposit: {
        agreed: toNumber(tenancy.depositRequired),
        charged: deposit.totalCharged,
        held: deposit.totalHeld,
        neverPaid: deposit.totalNeverPaid,
        lines: deposit.lines,
      },
      arrears: { total: arrearsTotal, charges: suggestedDeductions },
      totalOutstandingIncludingDeposit,
      unallocatedCredit,
      suggestedDeductions,
      suggestedRefundAmount: Math.max(0, deposit.totalHeld - arrearsTotal),
      noticeCompliance,
    };
  }

  // 5.2 — called once, at vacate, from inside TenancyService.vacate's own
  // transaction. A tenant who prepaid and left owes nothing further, but
  // any leftover credit sitting unmatched to a charge (the schema's own
  // promise that this "quietly catches up" whenever a new charge is
  // created) will NEVER catch up on its own once this tenancy is
  // VACATED — no new charge is ever coming. This is the last moment the
  // system can self-correct, so it runs the same oldest-first cascade
  // PaymentService already uses for a fresh payment, against whatever
  // credit is still sitting on this tenancy's existing payments.
  async applyLeftoverCredit(tenancyId: string, client: Prisma.TransactionClient): Promise<void> {
    const payments = await client.payment.findMany({
      where: { tenancyId, voidedAt: null },
      include: { allocations: true },
      orderBy: { paidAt: 'asc' },
    });

    for (const payment of payments) {
      const allocated = payment.allocations.reduce((sum, a) => sum + toNumber(a.amount), 0);
      const leftover = toNumber(payment.amount) - allocated;
      if (leftover > 0) {
        await this.allocateAgainstOutstanding(client, tenancyId, payment.id, leftover);
      }
    }
  }

  // 5.2 — nothing is written until the owner submits the figures she
  // wants. The preview only ever SUGGESTS; deductions are an itemised
  // record of her reasoning, not a constraint she's boxed into — the only
  // ceiling enforced here is the money actually in hand.
  async recordSettlement(
    tenancyId: string,
    input: RecordSettlementInput,
    actedById: string,
  ): Promise<DepositRefund> {
    return this.prismaService.$transaction(
      async (tx) => {
        const tenancy = await tx.tenancy.findUnique({ where: { id: tenancyId } });
        if (!tenancy) {
          throw new NotFoundException(`Tenancy ${tenancyId} not found`);
        }
        if (tenancy.status !== 'VACATED') {
          throw new ConflictException('A deposit can only be settled once the tenant has actually vacated');
        }

        const { totalHeld } = await this.balanceService.getDepositHeld(tenancyId, tx);

        // Compared with a half-cent tolerance: totalHeld is summed from
        // Decimal columns through toNumber(), and an exact `>` on two
        // floats can reject a refund of precisely the held amount.
        if (input.refundAmount - totalHeld > 0.005) {
          throw new BadRequestException(
            `Refund of ${input.refundAmount} exceeds the ${totalHeld} actually received as deposit for this tenancy`,
          );
        }

        const allocationRows = await this.validateDeductionTargets(tx, tenancyId, input.deductions ?? []);

        let refund: DepositRefund;
        try {
          refund = await this.settlementRepository.create(tenancyId, totalHeld, input, tx);
        } catch (error) {
          if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            throw new ConflictException('A deposit settlement has already been recorded for this tenancy');
          }
          throw error;
        }

        if (allocationRows.length) {
          // 5.2 — a deduction that names a real arrear is backed by an
          // actual internal payment, so the tenant's balance reflects what
          // was settled instead of permanently double-counting money
          // already accounted for out of the deposit.
          const settlementPayment = await tx.payment.create({
            data: {
              tenancyId,
              amount: allocationRows.reduce((sum, r) => sum + r.amount, 0),
              paidAt: input.refundDate ?? new Date(),
              method: 'OTHER',
              source: 'MANUAL',
              notes: `Settled from deposit — refund ${refund.id}`,
              recordedById: actedById,
            },
          });
          await tx.paymentAllocation.createMany({
            data: allocationRows.map((r) => ({
              paymentId: settlementPayment.id,
              chargeId: r.chargeId,
              amount: r.amount,
            })),
          });
        }

        return refund;
      },
      // See TenancyService.vacate — this transaction does several
      // sequential reads/writes (deposit-held recheck, deduction
      // validation, the refund insert, then an internal payment +
      // allocations), so it needs more headroom than the default under
      // real network latency to the database.
      { timeout: 15_000 },
    );
  }

  // Every deduction line that names a chargeId must point at a real,
  // currently outstanding, non-deposit charge on THIS tenancy, and the
  // lines naming the same charge must not add up to more than it's
  // actually owed. Returns the per-charge totals to allocate.
  private async validateDeductionTargets(
    tx: Prisma.TransactionClient,
    tenancyId: string,
    deductions: RecordSettlementInput['deductions'],
  ): Promise<{ chargeId: string; amount: number }[]> {
    const targeted = (deductions ?? []).filter(
      (d): d is typeof d & { chargeId: string } => !!d.chargeId,
    );
    if (!targeted.length) return [];

    const outstanding = await this.balanceService.getOutstandingCharges(tenancyId, tx);
    const outstandingById = new Map(outstanding.map((c) => [c.chargeId, c]));

    const consumed = new Map<string, number>();
    for (const line of targeted) {
      const charge = outstandingById.get(line.chargeId);
      if (!charge) {
        throw new BadRequestException(`Charge ${line.chargeId} is not an outstanding charge on this tenancy`);
      }
      if (isDepositCharge(charge.type)) {
        throw new BadRequestException(
          'A deduction cannot target a deposit charge — that would deduct money that was never received',
        );
      }
      const already = consumed.get(line.chargeId) ?? 0;
      if (already + line.amount > charge.outstanding + 0.005) {
        throw new BadRequestException(
          `Deductions against charge ${line.chargeId} total more than its outstanding balance of ${charge.outstanding}`,
        );
      }
      consumed.set(line.chargeId, already + line.amount);
    }

    return [...consumed.entries()].map(([chargeId, amount]) => ({ chargeId, amount }));
  }

  // Same oldest-tier-first cascade PaymentService.applyAutoAllocation
  // uses for a brand new payment, reused here for money a payment already
  // has leftover.
  private async allocateAgainstOutstanding(
    tx: Prisma.TransactionClient,
    tenancyId: string,
    paymentId: string,
    amount: number,
  ): Promise<void> {
    const outstanding = await this.balanceService.getOutstandingCharges(tenancyId, tx);

    let remaining = amount;
    const rows: { paymentId: string; chargeId: string; amount: number }[] = [];
    for (const charge of outstanding) {
      if (remaining <= 0) break;
      const applied = Math.min(charge.outstanding, remaining);
      rows.push({ paymentId, chargeId: charge.chargeId, amount: applied });
      remaining -= applied;
    }

    if (rows.length) {
      await tx.paymentAllocation.createMany({ data: rows });
    }
  }

  private describeArrears(charge: OutstandingCharge): SuggestedDeduction {
    const period = charge.periodMonth
      ? charge.periodMonth.toISOString().slice(0, 7)
      : undefined;
    const label = charge.type.charAt(0) + charge.type.slice(1).toLowerCase();
    return {
      chargeId: charge.chargeId,
      type: charge.type,
      periodMonth: charge.periodMonth,
      reason: period ? `${label} arrears for ${period}` : `${label} arrears`,
      amount: charge.outstanding,
    };
  }

  // 5.1 — flag only, never priced. noticeDate/noticePeriodDays come off
  // the tenancy; the end date used to measure against is actualEndDate
  // once vacated, falling back to expectedEndDate (from notice) or today
  // for a pre-vacate preview, which is why `basis` is reported alongside
  // it — a figure computed against "today" is provisional and the UI
  // should say so.
  private assessNoticeCompliance(tenancy: Tenancy, now: Date): NoticeCompliance {
    const requiredNoticeDays = tenancy.noticePeriodDays;

    let endDateUsed: Date;
    let basis: NoticeCompliance['basis'];
    if (tenancy.actualEndDate) {
      endDateUsed = tenancy.actualEndDate;
      basis = 'ACTUAL_END';
    } else if (tenancy.expectedEndDate) {
      endDateUsed = tenancy.expectedEndDate;
      basis = 'EXPECTED_END';
    } else {
      endDateUsed = now;
      basis = 'TODAY';
    }
    endDateUsed = toUtcDateOnly(endDateUsed);

    if (!tenancy.noticeDate) {
      return {
        status: 'NO_NOTICE',
        requiredNoticeDays,
        noticeDate: null,
        daysGiven: null,
        shortfallDays: requiredNoticeDays,
        endDateUsed,
        basis,
      };
    }

    const daysGiven = wholeDaysBetween(tenancy.noticeDate, endDateUsed);
    const status: NoticeCompliance['status'] = daysGiven >= requiredNoticeDays ? 'PROPER_NOTICE' : 'SHORT_NOTICE';

    return {
      status,
      requiredNoticeDays,
      noticeDate: tenancy.noticeDate,
      daysGiven,
      shortfallDays: Math.max(0, requiredNoticeDays - daysGiven),
      endDateUsed,
      basis,
    };
  }
}
