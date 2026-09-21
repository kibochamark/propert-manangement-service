import { PaymentMethod } from '../../generated/prisma/enums';

// Re-export Prisma's own generated types for reads.
export type { Payment } from '../../generated/prisma/client';
export { PaymentMethod };

export interface ManualAllocationInput {
  chargeId: string;
  amount: number;
}

// 3.2 + 3.3 combined into one call: record the money, and either let it
// auto-allocate (omit `allocations`) or point it at specific charges
// (the owner picking the months herself). `confirmDuplicate` is the
// override switch for 3.5.
export interface RecordPaymentInput {
  tenancyId: string;
  amount: number;
  paidAt: Date;
  method: PaymentMethod;
  reference?: string;
  notes?: string;
  allocations?: ManualAllocationInput[];
  confirmDuplicate?: boolean;
}
