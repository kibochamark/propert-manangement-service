import { HouseService } from './house.service';
import { HouseControllerDTO, UpdateHouseDTO, UpdateHouseStatusDTO } from "../validators/house.validator";
import { HouseStatus } from "../../generated/prisma/enums";
export declare class HouseController {
    private readonly houseService;
    constructor(houseService: HouseService);
    createHouse(data: HouseControllerDTO): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        propertyId: string;
        unitNumber: string;
        houseType: string | null;
        waterMeterNumber: string | null;
        defaultMonthlyRent: import("@prisma/client/runtime/index-browser").Decimal;
        defaultDepositAmount: import("@prisma/client/runtime/index-browser").Decimal | null;
        status: HouseStatus;
        notes: string | null;
    }>;
    getAllHouses(propertyId?: string, status?: HouseStatus): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        propertyId: string;
        unitNumber: string;
        houseType: string | null;
        waterMeterNumber: string | null;
        defaultMonthlyRent: import("@prisma/client/runtime/index-browser").Decimal;
        defaultDepositAmount: import("@prisma/client/runtime/index-browser").Decimal | null;
        status: HouseStatus;
        notes: string | null;
    }[]>;
    getHousesByProperty(propertyId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        propertyId: string;
        unitNumber: string;
        houseType: string | null;
        waterMeterNumber: string | null;
        defaultMonthlyRent: import("@prisma/client/runtime/index-browser").Decimal;
        defaultDepositAmount: import("@prisma/client/runtime/index-browser").Decimal | null;
        status: HouseStatus;
        notes: string | null;
    }[]>;
    getHouseById(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        propertyId: string;
        unitNumber: string;
        houseType: string | null;
        waterMeterNumber: string | null;
        defaultMonthlyRent: import("@prisma/client/runtime/index-browser").Decimal;
        defaultDepositAmount: import("@prisma/client/runtime/index-browser").Decimal | null;
        status: HouseStatus;
        notes: string | null;
    }>;
    updateHouse(id: string, data: UpdateHouseDTO): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        propertyId: string;
        unitNumber: string;
        houseType: string | null;
        waterMeterNumber: string | null;
        defaultMonthlyRent: import("@prisma/client/runtime/index-browser").Decimal;
        defaultDepositAmount: import("@prisma/client/runtime/index-browser").Decimal | null;
        status: HouseStatus;
        notes: string | null;
    }>;
    changeHouseStatus(id: string, data: UpdateHouseStatusDTO): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        propertyId: string;
        unitNumber: string;
        houseType: string | null;
        waterMeterNumber: string | null;
        defaultMonthlyRent: import("@prisma/client/runtime/index-browser").Decimal;
        defaultDepositAmount: import("@prisma/client/runtime/index-browser").Decimal | null;
        status: HouseStatus;
        notes: string | null;
    }>;
    deleteHouse(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        propertyId: string;
        unitNumber: string;
        houseType: string | null;
        waterMeterNumber: string | null;
        defaultMonthlyRent: import("@prisma/client/runtime/index-browser").Decimal;
        defaultDepositAmount: import("@prisma/client/runtime/index-browser").Decimal | null;
        status: HouseStatus;
        notes: string | null;
    }>;
    private rethrowOrWrap;
}
