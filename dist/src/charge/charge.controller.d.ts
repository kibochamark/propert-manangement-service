import { ChargeService } from './charge.service';
import { ChargeControllerDTO, VoidChargeDTO } from "../validators/charge.validator";
import { ChargeType } from "../../generated/prisma/enums";
export declare class ChargeController {
    private readonly chargeService;
    constructor(chargeService: ChargeService);
    createCharge(data: ChargeControllerDTO, req: any): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        type: ChargeType;
        periodMonth: Date | null;
        amount: import("@prisma/client/runtime/index-browser").Decimal;
        dueDate: Date | null;
        voidedAt: Date | null;
        voidReason: string | null;
        tenancyId: string;
        voidedById: string | null;
        createdById: string;
    }>;
    getChargesByTenancy(tenancyId: string, type?: ChargeType): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        type: ChargeType;
        periodMonth: Date | null;
        amount: import("@prisma/client/runtime/index-browser").Decimal;
        dueDate: Date | null;
        voidedAt: Date | null;
        voidReason: string | null;
        tenancyId: string;
        voidedById: string | null;
        createdById: string;
    }[]>;
    getChargeById(id: string): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        type: ChargeType;
        periodMonth: Date | null;
        amount: import("@prisma/client/runtime/index-browser").Decimal;
        dueDate: Date | null;
        voidedAt: Date | null;
        voidReason: string | null;
        tenancyId: string;
        voidedById: string | null;
        createdById: string;
    }>;
    voidCharge(id: string, data: VoidChargeDTO, req: any): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        type: ChargeType;
        periodMonth: Date | null;
        amount: import("@prisma/client/runtime/index-browser").Decimal;
        dueDate: Date | null;
        voidedAt: Date | null;
        voidReason: string | null;
        tenancyId: string;
        voidedById: string | null;
        createdById: string;
    }>;
    private rethrowOrWrap;
}
