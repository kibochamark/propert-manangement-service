import { PrismaService } from "../prismaservice/prismaservice.service";
import { PaymentRepository } from './payment.repository';
import { BalanceService } from "../balance/balance.service";
import { Payment, RecordPaymentInput } from "../types/payment";
export declare class PaymentService {
    private readonly prismaService;
    private readonly paymentRepository;
    private readonly balanceService;
    constructor(prismaService: PrismaService, paymentRepository: PaymentRepository, balanceService: BalanceService);
    recordPayment(input: RecordPaymentInput, recordedById: string): Promise<Payment>;
    getPaymentById(id: string): Promise<Payment>;
    getPaymentsByTenancy(tenancyId: string): Promise<Payment[]>;
    voidPayment(id: string, reason: string, voidedById: string): Promise<Payment>;
    private checkForDuplicateReference;
    private applyAutoAllocation;
    private applyManualAllocations;
}
