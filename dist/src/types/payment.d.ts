import { PaymentMethod } from '../../generated/prisma/enums';
export type { Payment } from '../../generated/prisma/client';
export { PaymentMethod };
export interface ManualAllocationInput {
    chargeId: string;
    amount: number;
}
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
