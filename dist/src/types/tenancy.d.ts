import { CreateTenantInput } from './tenant';
export type { Tenancy } from '../../generated/prisma/client';
export { TenancyStatus } from '../../generated/prisma/enums';
export interface MoveInInput {
    houseId: string;
    tenantId?: string;
    tenant?: CreateTenantInput;
    monthlyRent: number;
    depositRequired?: number;
    startDate: Date;
    expectedEndDate?: Date;
    openingWaterReading?: number;
    notes?: string;
}
