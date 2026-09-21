import { TenantControllerDTO } from './tenant.validator';
export declare class MoveInDTO {
    houseId: string;
    tenantId?: string;
    tenant?: TenantControllerDTO;
    monthlyRent: number;
    depositRequired?: number;
    startDate: string;
    expectedEndDate?: string;
    openingWaterReading?: number;
    notes?: string;
}
