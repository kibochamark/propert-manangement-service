import { ChargeType } from "../../generated/prisma/enums";
export declare class ChargeControllerDTO {
    tenancyId: string;
    type: ChargeType;
    amount: number;
    periodMonth?: string;
    description?: string;
    dueDate?: string;
}
export declare class VoidChargeDTO {
    reason: string;
}
