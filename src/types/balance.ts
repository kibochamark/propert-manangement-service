import { ChargeType } from '../../generated/prisma/enums';

// One outstanding charge, ready to be eaten into by a payment. Sorted by
// BalanceService into the priority order the whole system agrees on:
// deposits, then rent, then water, then everything else — see
// balance.service.ts for the actual table.
export interface OutstandingCharge {
  chargeId: string;
  type: ChargeType;
  periodMonth: Date | null;
  dueDate: Date | null;
  createdAt: Date;
  outstanding: number;
}

// The answer to "has this tenant cleared out" — broken down by charge
// type so the owner can see rent is fine but water isn't, not just one
// opaque total.
export interface TenancyBalance {
  tenancyId: string;
  byType: Partial<Record<ChargeType, number>>;
  total: number;
  isCleared: boolean;
}
