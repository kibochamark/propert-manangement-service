export type { House } from '../../generated/prisma/client';
export { HouseStatus } from '../../generated/prisma/enums';
export interface CreateHouseInput {
    propertyId: string;
    unitNumber: string;
    defaultMonthlyRent: number;
    houseType?: string;
    waterMeterNumber?: string;
    defaultDepositAmount?: number;
    notes?: string;
}
export type UpdateHouseInput = Partial<Omit<CreateHouseInput, 'propertyId'>>;
