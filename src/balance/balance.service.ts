import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaservice/prismaservice.service';
import { toNumber } from 'src/common/decimal.util';
import { OutstandingCharge, TenancyBalance } from 'src/types/balance';
import { ChargeType, Prisma } from 'generated/prisma/client';

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

  async getOutstandingCharges(
    tenancyId: string,
    client: Prisma.TransactionClient = this.prismaService,
  ): Promise<OutstandingCharge[]> {
    const charges = await client.charge.findMany({
      where: { tenancyId, voidedAt: null },
      include: {
        // Only count allocations from payments that are still live — a
        // voided payment's allocations must not keep a charge looking paid.
        allocations: { where: { payment: { voidedAt: null } } },
      },
    });

    return charges
      .map((charge) => ({
        chargeId: charge.id,
        type: charge.type,
        periodMonth: charge.periodMonth,
        dueDate: charge.dueDate,
        createdAt: charge.createdAt,
        outstanding:
          toNumber(charge.amount) - charge.allocations.reduce((sum, a) => sum + toNumber(a.amount), 0),
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
