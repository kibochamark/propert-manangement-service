import { PaymentMethod } from "../../generated/prisma/enums";
export declare class AllocationInputDTO {
    chargeId: string;
    amount: number;
}
export declare class RecordPaymentDTO {
    tenancyId: string;
    amount: number;
    paidAt: string;
    method: PaymentMethod;
    reference?: string;
    notes?: string;
    allocations?: AllocationInputDTO[];
    confirmDuplicate?: boolean;
}
export declare class VoidPaymentDTO {
    reason: string;
}
