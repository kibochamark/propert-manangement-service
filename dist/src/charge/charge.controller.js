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
exports.ChargeController = void 0;
const common_1 = require("@nestjs/common");
const charge_service_1 = require("./charge.service");
const charge_validator_1 = require("../validators/charge.validator");
const enums_1 = require("../../generated/prisma/enums");
const auth_guard_1 = require("../guards/auth.guard");
let ChargeController = class ChargeController {
    chargeService;
    constructor(chargeService) {
        this.chargeService = chargeService;
    }
    async createCharge(data, req) {
        try {
            const input = {
                tenancyId: data.tenancyId,
                type: data.type,
                amount: data.amount,
                periodMonth: data.periodMonth ? new Date(data.periodMonth) : undefined,
                description: data.description,
                dueDate: data.dueDate ? new Date(data.dueDate) : undefined,
            };
            return await this.chargeService.createCharge(input, req.user.id);
        }
        catch (error) {
            this.rethrowOrWrap(error, 'Failed to create charge');
        }
    }
    async getChargesByTenancy(tenancyId, type) {
        try {
            return await this.chargeService.getChargesByTenancy(tenancyId, type);
        }
        catch (error) {
            this.rethrowOrWrap(error, 'Failed to fetch charges');
        }
    }
    async getChargeById(id) {
        try {
            return await this.chargeService.getChargeById(id);
        }
        catch (error) {
            this.rethrowOrWrap(error, 'Failed to fetch charge');
        }
    }
    async voidCharge(id, data, req) {
        try {
            return await this.chargeService.voidCharge(id, data.reason, req.user.id);
        }
        catch (error) {
            this.rethrowOrWrap(error, 'Failed to void charge');
        }
    }
    rethrowOrWrap(error, message) {
        if (error instanceof common_1.HttpException) {
            throw error;
        }
        throw new common_1.HttpException(message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
};
exports.ChargeController = ChargeController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [charge_validator_1.ChargeControllerDTO, Object]),
    __metadata("design:returntype", Promise)
], ChargeController.prototype, "createCharge", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Query)('tenancyId')),
    __param(1, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ChargeController.prototype, "getChargesByTenancy", null);
__decorate([
    (0, common_1.Get)('charge/:id'),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChargeController.prototype, "getChargeById", null);
__decorate([
    (0, common_1.Patch)('charge/:id/void'),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, charge_validator_1.VoidChargeDTO, Object]),
    __metadata("design:returntype", Promise)
], ChargeController.prototype, "voidCharge", null);
exports.ChargeController = ChargeController = __decorate([
    (0, common_1.Controller)('charges'),
    (0, common_1.UseGuards)(auth_guard_1.KindeAuthGuard),
    __metadata("design:paramtypes", [charge_service_1.ChargeService])
], ChargeController);
//# sourceMappingURL=charge.controller.js.map