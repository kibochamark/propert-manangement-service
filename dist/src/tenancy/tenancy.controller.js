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
exports.TenancyController = void 0;
const common_1 = require("@nestjs/common");
const tenancy_service_1 = require("./tenancy.service");
const balance_service_1 = require("../balance/balance.service");
const tenancy_validator_1 = require("../validators/tenancy.validator");
const auth_guard_1 = require("../guards/auth.guard");
let TenancyController = class TenancyController {
    tenancyService;
    balanceService;
    constructor(tenancyService, balanceService) {
        this.tenancyService = tenancyService;
        this.balanceService = balanceService;
    }
    async moveIn(data, req) {
        try {
            const input = {
                houseId: data.houseId,
                tenantId: data.tenantId,
                monthlyRent: data.monthlyRent,
                depositRequired: data.depositRequired,
                startDate: new Date(data.startDate),
                expectedEndDate: data.expectedEndDate ? new Date(data.expectedEndDate) : undefined,
                openingWaterReading: data.openingWaterReading,
                notes: data.notes,
            };
            return await this.tenancyService.moveIn(input, req.user.id);
        }
        catch (error) {
            console.log(error.message);
            this.rethrowOrWrap(error, 'Failed to move in tenant');
        }
    }
    async getTenancyById(id) {
        try {
            return await this.tenancyService.getTenancyById(id);
        }
        catch (error) {
            this.rethrowOrWrap(error, 'Failed to fetch tenancy');
        }
    }
    async getTenancyHistoryForHouse(houseId) {
        try {
            return await this.tenancyService.getTenancyHistoryForHouse(houseId);
        }
        catch (error) {
            this.rethrowOrWrap(error, 'Failed to fetch tenancy history');
        }
    }
    async getActiveTenancyForHouse(houseId) {
        try {
            const tenancy = await this.tenancyService.getActiveTenancyForHouse(houseId);
            if (!tenancy) {
                throw new common_1.HttpException('No active tenancy for this house', common_1.HttpStatus.NOT_FOUND);
            }
            return tenancy;
        }
        catch (error) {
            this.rethrowOrWrap(error, 'Failed to fetch active tenancy');
        }
    }
    async getTenancyBalance(id) {
        try {
            await this.tenancyService.getTenancyById(id);
            return await this.balanceService.getTenancyBalance(id);
        }
        catch (error) {
            this.rethrowOrWrap(error, 'Failed to fetch tenancy balance');
        }
    }
    rethrowOrWrap(error, message) {
        if (error instanceof common_1.HttpException) {
            throw error;
        }
        throw new common_1.HttpException(message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
};
exports.TenancyController = TenancyController;
__decorate([
    (0, common_1.Post)('move-in'),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tenancy_validator_1.MoveInDTO, Object]),
    __metadata("design:returntype", Promise)
], TenancyController.prototype, "moveIn", null);
__decorate([
    (0, common_1.Get)('tenancy/:id'),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TenancyController.prototype, "getTenancyById", null);
__decorate([
    (0, common_1.Get)('house/:houseId'),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Param)('houseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TenancyController.prototype, "getTenancyHistoryForHouse", null);
__decorate([
    (0, common_1.Get)('house/:houseId/active'),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Param)('houseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TenancyController.prototype, "getActiveTenancyForHouse", null);
__decorate([
    (0, common_1.Get)('tenancy/:id/balance'),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TenancyController.prototype, "getTenancyBalance", null);
exports.TenancyController = TenancyController = __decorate([
    (0, common_1.Controller)('tenancies'),
    (0, common_1.UseGuards)(auth_guard_1.KindeAuthGuard),
    __metadata("design:paramtypes", [tenancy_service_1.TenancyService,
        balance_service_1.BalanceService])
], TenancyController);
//# sourceMappingURL=tenancy.controller.js.map