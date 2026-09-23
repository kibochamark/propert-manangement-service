import { HouseStatus } from "../../generated/prisma/enums";
export declare class HouseControllerDTO {
    propertyId: string;
    unitNumber: string;
    houseType?: string;
    waterMeterNumber?: string;
    metadata?: JSON;
    defaultMonthlyRent: number;
    defaultDepositAmount?: number;
    notes?: string;
}
declare const UpdateHouseDTO_base: import("@nestjs/mapped-types").MappedType<Partial<Omit<HouseControllerDTO, "propertyId">>>;
export declare class UpdateHouseDTO extends UpdateHouseDTO_base {
}
export declare class UpdateHouseStatusDTO {
    status: HouseStatus;
    reason?: string;
}
export {};
