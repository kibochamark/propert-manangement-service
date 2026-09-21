import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prismaservice/prismaservice.service';
import { PaymentRepository } from './payment.repository';
import { BalanceService } from 'src/balance/balance.service';
import { toNumber } from 'src/common/decimal.util';
import { ManualAllocationInput, Payment, RecordPaymentInput } from 'src/types/payment';
import { Prisma } from 'generated/prisma/client';

@Injectable()
export class PaymentService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly paymentRepository: PaymentRepository,
    private readonly balanceService: BalanceService,
  ) {}

  // 3.2 + 3.3 + 3.5 — recording, allocating, and duplicate-checking all
  // happen in one call, one transaction. Scenario: Mary pays 20,000; if
  // the process crashed after the Payment row was written but before its
  // allocations were, she'd show as having paid 20,000 that's attached to
  // nothing — an invisible credit no one can find. The transaction makes
  // that impossible: either both the payment and its allocations land,
  // or neither does.
  async recordPayment(input: RecordPaymentInput, recordedById: string): Promise<Payment> {
    await this.checkForDuplicateReference(input);

    return this.prismaService.$transaction(async (tx) => {
      const tenancy = await tx.tenancy.findUnique({ where: { id: input.tenancyId } });
      if (!tenancy) {
        throw new NotFoundException(`Tenancy ${input.tenancyId} not found`);
      }

      const payment = await tx.payment.create({
        data: {
          tenancyId: input.tenancyId,
          amount: input.amount,
          paidAt: input.paidAt,
          method: input.method,
          reference: input.reference,
          notes: input.notes,
          recordedById,
        },
      });

      if (input.allocations?.length) {
        await this.applyManualAllocations(tx, input.tenancyId, payment.id, input.amount, input.allocations);
      } else {
        await this.applyAutoAllocation(tx, input.tenancyId, payment.id, input.amount);
      }

      return tx.payment.findUniqueOrThrow({
        where: { id: payment.id },
        include: { allocations: { include: { charge: true } } },
      });
    });
  }

  async getPaymentById(id: string): Promise<Payment> {
    const payment = await this.paymentRepository.findById(id);
    if (!payment) {
      throw new NotFoundException(`Payment ${id} not found`);
    }
    return payment;
  }

  async getPaymentsByTenancy(tenancyId: string): Promise<Payment[]> {
    return this.paymentRepository.findByTenancy(tenancyId);
  }

  // 3.6 — reverse, never delete. The allocations this payment made stay
  // in the table (the history isn't erased) but BalanceService ignores
  // any allocation whose payment is voided, so the affected charges go
  // straight back to being owed the moment this commits.
  async voidPayment(id: string, reason: string, voidedById: string): Promise<Payment> {
    const payment = await this.getPaymentById(id);
    if (payment.voidedAt) {
      throw new ConflictException('Payment is already voided');
    }
    return this.paymentRepository.voidPayment(id, reason, voidedById);
  }

  // 3.5 — warn, don't block. Scenario: the owner re-enters ref "QK8Y2" by
  // accident a minute after the first entry — she gets a 409 naming the
  // original payment before anything duplicate is saved. Scenario two:
  // it's a genuine second M-Pesa message that happens to reuse a
  // recycled-looking code — she resubmits with confirmDuplicate + a note
  // explaining why, and it goes through.
  private async checkForDuplicateReference(input: RecordPaymentInput): Promise<void> {
    if (!input.reference) return;

    const existing = await this.paymentRepository.findActiveByReference(input.reference);
    if (!existing) return;

    if (!input.confirmDuplicate) {
      throw new ConflictException({
        message: `Reference "${input.reference}" is already used on another payment`,
        conflictingPaymentId: existing.id,
        conflictingTenancyId: existing.tenancyId,
        conflictingAmount: toNumber(existing.amount),
        conflictingDate: existing.paidAt,
      });
    }

    if (!input.notes) {
      throw new BadRequestException('A reason (in notes) is required when confirming a duplicate reference');
    }
  }

  private async applyAutoAllocation(
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
    // Anything left in `remaining` is simply unapplied credit — see the
    // AUTO-ALLOCATION note on PaymentAllocation in schema.prisma.
  }

  private async applyManualAllocations(
    tx: Prisma.TransactionClient,
    tenancyId: string,
    paymentId: string,
    paymentAmount: number,
    allocations: ManualAllocationInput[],
  ): Promise<void> {
    const outstanding = await this.balanceService.getOutstandingCharges(tenancyId, tx);
    const outstandingById = new Map(outstanding.map((c) => [c.chargeId, c.outstanding]));

    let totalAllocated = 0;
    for (const allocation of allocations) {
      const maxAllowed = outstandingById.get(allocation.chargeId);
      if (maxAllowed === undefined) {
        throw new BadRequestException(
          `Charge ${allocation.chargeId} is not an outstanding charge on this tenancy`,
        );
      }
      if (allocation.amount > maxAllowed) {
        throw new BadRequestException(
          `Allocation of ${allocation.amount} exceeds the outstanding balance of ${maxAllowed} on charge ${allocation.chargeId}`,
        );
      }
      totalAllocated += allocation.amount;
    }

    if (totalAllocated > paymentAmount) {
      throw new BadRequestException('Total allocations exceed the payment amount');
    }

    await tx.paymentAllocation.createMany({
      data: allocations.map((allocation) => ({
        paymentId,
        chargeId: allocation.chargeId,
        amount: allocation.amount,
      })),
    });
  }
}
