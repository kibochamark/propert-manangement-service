import { PaymentService } from './payment.service';
import { RecordPaymentDTO, VoidPaymentDTO } from "../validators/payment.validator";
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    recordPayment(data: RecordPaymentDTO, req: any): Promise<{
        id: string;
        createdAt: Date;
        notes: string | null;
        amount: import("@prisma/client/runtime/index-browser").Decimal;
        voidedAt: Date | null;
        voidReason: string | null;
        tenancyId: string;
        voidedById: string | null;
        paidAt: Date;
        method: import("src/types/payment").PaymentMethod;
        source: import("../../generated/prisma/enums").PaymentSource;
        reference: string | null;
        recordedById: string;
    }>;
    getPaymentsByTenancy(tenancyId: string): Promise<{
        id: string;
        createdAt: Date;
        notes: string | null;
        amount: import("@prisma/client/runtime/index-browser").Decimal;
        voidedAt: Date | null;
        voidReason: string | null;
        tenancyId: string;
        voidedById: string | null;
        paidAt: Date;
        method: import("src/types/payment").PaymentMethod;
        source: import("../../generated/prisma/enums").PaymentSource;
        reference: string | null;
        recordedById: string;
    }[]>;
    getPaymentById(id: string): Promise<{
        id: string;
        createdAt: Date;
        notes: string | null;
        amount: import("@prisma/client/runtime/index-browser").Decimal;
        voidedAt: Date | null;
        voidReason: string | null;
        tenancyId: string;
        voidedById: string | null;
        paidAt: Date;
        method: import("src/types/payment").PaymentMethod;
        source: import("../../generated/prisma/enums").PaymentSource;
        reference: string | null;
        recordedById: string;
    }>;
    voidPayment(id: string, data: VoidPaymentDTO, req: any): Promise<{
        id: string;
        createdAt: Date;
        notes: string | null;
        amount: import("@prisma/client/runtime/index-browser").Decimal;
        voidedAt: Date | null;
        voidReason: string | null;
        tenancyId: string;
        voidedById: string | null;
        paidAt: Date;
        method: import("src/types/payment").PaymentMethod;
        source: import("../../generated/prisma/enums").PaymentSource;
        reference: string | null;
        recordedById: string;
    }>;
    private rethrowOrWrap;
}
