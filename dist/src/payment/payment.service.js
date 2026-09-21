"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const prismaservice_service_1 = require("../prismaservice/prismaservice.service");
const payment_repository_1 = require("./payment.repository");
const balance_service_1 = require("../balance/balance.service");
const decimal_util_1 = require("../common/decimal.util");
let PaymentService = class PaymentService {
    prismaService;
    paymentRepository;
    balanceService;
    constructor(prismaService, paymentRepository, balanceService) {
        this.prismaService = prismaService;
        this.paymentRepository = paymentRepository;
        this.balanceService = balanceService;
    }
    async recordPayment(input, recordedById) {
        await this.checkForDuplicateReference(input);
        return this.prismaService.$transaction(async (tx) => {
            const tenancy = await tx.tenancy.findUnique({ where: { id: input.tenancyId } });
            if (!tenancy) {
                throw new common_1.NotFoundException(`Tenancy ${input.tenancyId} not found`);
            }
            const payment = await tx.payment.create({
                data: {
                    tenancyId: input.tenancyId,
                    amount: input.amount,
                    paidAt: input.paidAt,
                    method: input.method,
                    reference: input.reference,
                    notes: input.notes,
                    recordedById,
                },
            });
            if (input.allocations?.length) {
                await this.applyManualAllocations(tx, input.tenancyId, payment.id, input.amount, input.allocations);
            }
            else {
                await this.applyAutoAllocation(tx, input.tenancyId, payment.id, input.amount);
            }
            return tx.payment.findUniqueOrThrow({
                where: { id: payment.id },
                include: { allocations: { include: { charge: true } } },
            });
        });
    }
    async getPaymentById(id) {
        const payment = await this.paymentRepository.findById(id);
        if (!payment) {
            throw new common_1.NotFoundException(`Payment ${id} not found`);
        }
        return payment;
    }
    async getPaymentsByTenancy(tenancyId) {
        return this.paymentRepository.findByTenancy(tenancyId);
    }
    async voidPayment(id, reason, voidedById) {
        const payment = await this.getPaymentById(id);
        if (payment.voidedAt) {
            throw new common_1.ConflictException('Payment is already voided');
        }
        return this.paymentRepository.voidPayment(id, reason, voidedById);
    }
    async checkForDuplicateReference(input) {
        if (!input.reference)
            return;
        const existing = await this.paymentRepository.findActiveByReference(input.reference);
        if (!existing)
            return;
        if (!input.confirmDuplicate) {
            throw new common_1.ConflictException({
                message: `Reference "${input.reference}" is already used on another payment`,
                conflictingPaymentId: existing.id,
                conflictingTenancyId: existing.tenancyId,
                conflictingAmount: (0, decimal_util_1.toNumber)(existing.amount),
                conflictingDate: existing.paidAt,
            });
        }
        if (!input.notes) {
            throw new common_1.BadRequestException('A reason (in notes) is required when confirming a duplicate reference');
        }
    }
    async applyAutoAllocation(tx, tenancyId, paymentId, amount) {
        const outstanding = await this.balanceService.getOutstandingCharges(tenancyId, tx);
        let remaining = amount;
        const rows = [];
        for (const charge of outstanding) {
            if (remaining <= 0)
                break;
            const applied = Math.min(charge.outstanding, remaining);
            rows.push({ paymentId, chargeId: charge.chargeId, amount: applied });
            remaining -= applied;
        }
        if (rows.length) {
            await tx.paymentAllocation.createMany({ data: rows });
        }
    }
    async applyManualAllocations(tx, tenancyId, paymentId, paymentAmount, allocations) {
        const outstanding = await this.balanceService.getOutstandingCharges(tenancyId, tx);
        const outstandingById = new Map(outstanding.map((c) => [c.chargeId, c.outstanding]));
        let totalAllocated = 0;
        for (const allocation of allocations) {
            const maxAllowed = outstandingById.get(allocation.chargeId);
            if (maxAllowed === undefined) {
                throw new common_1.BadRequestException(`Charge ${allocation.chargeId} is not an outstanding charge on this tenancy`);
            }
            if (allocation.amount > maxAllowed) {
                throw new common_1.BadRequestException(`Allocation of ${allocation.amount} exceeds the outstanding balance of ${maxAllowed} on charge ${allocation.chargeId}`);
            }
            totalAllocated += allocation.amount;
        }
        if (totalAllocated > paymentAmount) {
            throw new common_1.BadRequestException('Total allocations exceed the payment amount');
        }
        await tx.paymentAllocation.createMany({
            data: allocations.map((allocation) => ({
                paymentId,
                chargeId: allocation.chargeId,
                amount: allocation.amount,
            })),
        });
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prismaservice_service_1.PrismaService,
        payment_repository_1.PaymentRepository,
        balance_service_1.BalanceService])
], PaymentService);
//# sourceMappingURL=payment.service.js.map