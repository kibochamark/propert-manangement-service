import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaservice/prismaservice.service';
import { toNumber } from 'src/common/decimal.util';
import { DEPOSIT_CHARGE_TYPES } from 'src/common/charge-type.util';
import { DepositHeld, OutstandingCharge, TenancyBalance } from 'src/types/balance';
import { ChargeType, Prisma } from 'generated/prisma/client';

interface LiveCharge {
  chargeId: string;
  type: ChargeType;
  periodMonth: Date | null;
  dueDate: Date | null;
  createdAt: Date;
  charged: number;
  paid: number;
}

// The single source of truth for "what does this tenancy still owe."
// Both the payment auto-allocator (which needs the outstanding charges in
// priority order) and any balance-check endpoint (which just wants the
// totals) go through this — so they can never disagree with each other.
//
// Every method takes an optional `client`, defaulting to the normal
// injected PrismaService, but overridable with a transaction's client.
// This matters when PaymentService calls in here from inside its own
// $transaction: reading through the transaction's own connection is what
// keeps the read-then-write atomic with everything else that transaction
// is doing.
@Injectable()
export class BalanceService {
  // Deposits are always settled first (the owner's explicit rule), then
  // rent, then water, then everything else that isn't rent/water/deposit.
  // Within a tier, the oldest charge (by period, then due date, then
  // creation date) goes first.
  private static readonly PRIORITY: Record<ChargeType, number> = {
    RENTDEPOSIT: 0,
    WATERDEPOSIT: 0,
    TRASHDEPOSIT: 0,
    SECURITYDEPOSIT: 0,
    RENT: 1,
    WATER: 2,
    TRASH: 3,
    SECURITY: 3,
    SERVICEFEE: 3,
    OTHER: 3,
  };

  constructor(private readonly prismaService: PrismaService) {}

  // Shared by getOutstandingCharges and getDepositHeld so the two
  // predicates that make either of them correct — a voided charge doesn't
  // count, and a voided payment's allocations don't keep a charge looking
  // paid — live in exactly one place.
  private async loadLiveCharges(
    tenancyId: string,
    client: Prisma.TransactionClient,
    types?: ChargeType[],
  ): Promise<LiveCharge[]> {
    const charges = await client.charge.findMany({
      where: { tenancyId, voidedAt: null, ...(types ? { type: { in: types } } : {}) },
      include: {
        // Only count allocations from payments that are still live — a
        // voided payment's allocations must not keep a charge looking paid.
        allocations: { where: { payment: { voidedAt: null } } },
      },
    });

    return charges.map((charge) => ({
      chargeId: charge.id,
      type: charge.type,
      periodMonth: charge.periodMonth,
      dueDate: charge.dueDate,
      createdAt: charge.createdAt,
      charged: toNumber(charge.amount),
      paid: charge.allocations.reduce((sum, a) => sum + toNumber(a.amount), 0),
    }));
  }

  async getOutstandingCharges(
    tenancyId: string,
    client: Prisma.TransactionClient = this.prismaService,
  ): Promise<OutstandingCharge[]> {
    const charges = await this.loadLiveCharges(tenancyId, client);

    return charges
      .map((charge) => ({
        chargeId: charge.chargeId,
        type: charge.type,
        periodMonth: charge.periodMonth,
        dueDate: charge.dueDate,
        createdAt: charge.createdAt,
        outstanding: charge.charged - charge.paid,
      }))
      .filter((charge) => charge.outstanding > 0)
      .sort((a, b) => {
        const tierDiff = BalanceService.PRIORITY[a.type] - BalanceService.PRIORITY[b.type];
        if (tierDiff !== 0) return tierDiff;
        const aDate = a.periodMonth ?? a.dueDate ?? a.createdAt;
        const bDate = b.periodMonth ?? b.dueDate ?? b.createdAt;
        return aDate.getTime() - bDate.getTime();
      });
  }

  // 5.2 — the deposit actually IN HAND, which is the only honest ceiling
  // on a refund. NOT tenancy.depositRequired: that is the agreed figure,
  // and a tenant who only ever paid half of it must never be refundable
  // the whole thing. A Payment has no type of its own (see the note on
  // the Payment model in schema.prisma) — what a payment was FOR is
  // described solely by its allocations, so this sums allocations against
  // every deposit-type charge, not payments.
  async getDepositHeld(
    tenancyId: string,
    client: Prisma.TransactionClient = this.prismaService,
  ): Promise<DepositHeld> {
    const lines = await this.loadLiveCharges(tenancyId, client, DEPOSIT_CHARGE_TYPES);

    const totalCharged = lines.reduce((sum, l) => sum + l.charged, 0);
    const totalHeld = lines.reduce((sum, l) => sum + l.paid, 0);

    return {
      tenancyId,
      totalCharged,
      totalHeld,
      totalNeverPaid: totalCharged - totalHeld,
      lines: lines.map((l) => ({
        chargeId: l.chargeId,
        type: l.type,
        charged: l.charged,
        paid: l.paid,
        outstanding: l.charged - l.paid,
      })),
    };
  }

  // 5.2 — money that arrived but was never matched to a charge (a
  // prepayment with nothing left to apply it to). Real money the owner
  // is holding, invisible to getOutstandingCharges because it isn't
  // attached to anything. See SettlementService.applyLeftoverCredit for
  // why this has to be caught at vacate time specifically.
  async getUnallocatedCredit(
    tenancyId: string,
    client: Prisma.TransactionClient = this.prismaService,
  ): Promise<number> {
    const payments = await client.payment.findMany({
      where: { tenancyId, voidedAt: null },
      include: { allocations: true },
    });

    return payments.reduce((sum, payment) => {
      const allocated = payment.allocations.reduce((a, alloc) => a + toNumber(alloc.amount), 0);
      return sum + (toNumber(payment.amount) - allocated);
    }, 0);
  }

  async getTenancyBalance(
    tenancyId: string,
    client: Prisma.TransactionClient = this.prismaService,
  ): Promise<TenancyBalance> {
    const outstanding = await this.getOutstandingCharges(tenancyId, client);

    const byType: Partial<Record<ChargeType, number>> = {};
    let total = 0;
    for (const charge of outstanding) {
      byType[charge.type] = (byType[charge.type] ?? 0) + charge.outstanding;
      total += charge.outstanding;
    }

    return { tenancyId, byType, total, isCleared: total === 0 };
  }
}
