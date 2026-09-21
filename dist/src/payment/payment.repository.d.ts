import { PrismaService } from "../prismaservice/prismaservice.service";
import { Payment } from "../types/payment";
export declare class PaymentRepository {
    private readonly prismaService;
    private logger;
    constructor(prismaService: PrismaService);
    findById(id: string): Promise<Payment | null>;
    findByTenancy(tenancyId: string): Promise<Payment[]>;
    findActiveByReference(reference: string): Promise<Payment | null>;
    voidPayment(id: string, reason: string, voidedById: string): Promise<Payment>;
}
