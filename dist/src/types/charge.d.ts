import { ChargeType } from '../../generated/prisma/enums';
export type { Charge } from '../../generated/prisma/client';
export { ChargeType };
export interface CreateChargeInput {
    tenancyId: string;
    type: ChargeType;
    amount: number;
    periodMonth?: Date;
    description?: string;
    dueDate?: Date;
}
