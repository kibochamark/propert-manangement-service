import { ChargeType } from '../../generated/prisma/enums';
export interface OutstandingCharge {
    chargeId: string;
    type: ChargeType;
    periodMonth: Date | null;
    dueDate: Date | null;
    createdAt: Date;
    outstanding: number;
}
export interface TenancyBalance {
    tenancyId: string;
    byType: Partial<Record<ChargeType, number>>;
    total: number;
    isCleared: boolean;
}
