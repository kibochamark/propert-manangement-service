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

// One deposit-type charge and what actually came in against it.
export interface DepositHeldLine {
  chargeId: string;
  type: ChargeType;
  charged: number; // what was agreed for this deposit component
  paid: number; // what actually arrived against it — live allocations only
  outstanding: number;
}

// 5.2 — "how much deposit can honestly be refunded." totalHeld is the
// refund ceiling; it is NOT tenancy.depositRequired. A tenant who only
// ever paid half their deposit can never be refunded the whole thing.
export interface DepositHeld {
  tenancyId: string;
  totalCharged: number;
  totalHeld: number;
  totalNeverPaid: number;
  lines: DepositHeldLine[];
}
