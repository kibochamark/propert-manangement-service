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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
const common_1 = require("@nestjs/common");
const payment_service_1 = require("./payment.service");
const payment_validator_1 = require("../validators/payment.validator");
const auth_guard_1 = require("../guards/auth.guard");
let PaymentController = class PaymentController {
    paymentService;
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    async recordPayment(data, req) {
        try {
            const input = {
                tenancyId: data.tenancyId,
                amount: data.amount,
                paidAt: new Date(data.paidAt),
                method: data.method,
                reference: data.reference,
                notes: data.notes,
                allocations: data.allocations,
                confirmDuplicate: data.confirmDuplicate,
            };
            return await this.paymentService.recordPayment(input, req.user.id);
        }
        catch (error) {
            this.rethrowOrWrap(error, 'Failed to record payment');
        }
    }
    async getPaymentsByTenancy(tenancyId) {
        try {
            return await this.paymentService.getPaymentsByTenancy(tenancyId);
        }
        catch (error) {
            this.rethrowOrWrap(error, 'Failed to fetch payments');
        }
    }
    async getPaymentById(id) {
        try {
            return await this.paymentService.getPaymentById(id);
        }
        catch (error) {
            this.rethrowOrWrap(error, 'Failed to fetch payment');
        }
    }
    async voidPayment(id, data, req) {
        try {
            return await this.paymentService.voidPayment(id, data.reason, req.user.id);
        }
        catch (error) {
            this.rethrowOrWrap(error, 'Failed to void payment');
        }
    }
    rethrowOrWrap(error, message) {
        if (error instanceof common_1.HttpException) {
            throw error;
        }
        throw new common_1.HttpException(message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
};
exports.PaymentController = PaymentController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_validator_1.RecordPaymentDTO, Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "recordPayment", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Query)('tenancyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "getPaymentsByTenancy", null);
__decorate([
    (0, common_1.Get)('payment/:id'),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "getPaymentById", null);
__decorate([
    (0, common_1.Patch)('payment/:id/void'),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, payment_validator_1.VoidPaymentDTO, Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "voidPayment", null);
exports.PaymentController = PaymentController = __decorate([
    (0, common_1.Controller)('payments'),
    (0, common_1.UseGuards)(auth_guard_1.KindeAuthGuard),
    __metadata("design:paramtypes", [payment_service_1.PaymentService])
], PaymentController);
//# sourceMappingURL=payment.controller.js.map