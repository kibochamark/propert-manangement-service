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
var PaymentRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRepository = void 0;
const common_1 = require("@nestjs/common");
const prismaservice_service_1 = require("../prismaservice/prismaservice.service");
const WITH_ALLOCATIONS = { allocations: { include: { charge: true } } };
let PaymentRepository = PaymentRepository_1 = class PaymentRepository {
    prismaService;
    logger = new common_1.Logger(PaymentRepository_1.name);
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findById(id) {
        return this.prismaService.payment.findUnique({ where: { id }, include: WITH_ALLOCATIONS });
    }
    async findByTenancy(tenancyId) {
        return this.prismaService.payment.findMany({
            where: { tenancyId },
            include: WITH_ALLOCATIONS,
            orderBy: { paidAt: 'desc' },
        });
    }
    async findActiveByReference(reference) {
        return this.prismaService.payment.findFirst({
            where: { reference, voidedAt: null },
        });
    }
    async voidPayment(id, reason, voidedById) {
        this.logger.log(`Voiding payment ${id}: ${reason}`);
        return this.prismaService.payment.update({
            where: { id },
            data: { voidedAt: new Date(), voidReason: reason, voidedById },
            include: WITH_ALLOCATIONS,
        });
    }
};
exports.PaymentRepository = PaymentRepository;
exports.PaymentRepository = PaymentRepository = PaymentRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prismaservice_service_1.PrismaService])
], PaymentRepository);
//# sourceMappingURL=payment.repository.js.map