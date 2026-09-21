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
exports.TenantController = void 0;
const common_1 = require("@nestjs/common");
const tenant_service_1 = require("./tenant.service");
const tenant_validator_1 = require("../validators/tenant.validator");
const auth_guard_1 = require("../guards/auth.guard");
let TenantController = class TenantController {
    tenantService;
    constructor(tenantService) {
        this.tenantService = tenantService;
    }
    async createTenant(data) {
        try {
            return await this.tenantService.createTenant(data);
        }
        catch (error) {
            this.rethrowOrWrap(error, 'Failed to create tenant');
        }
    }
    async getAllTenants() {
        try {
            return await this.tenantService.getAllTenants();
        }
        catch (error) {
            this.rethrowOrWrap(error, 'Failed to fetch tenants');
        }
    }
    async getTenantById(id) {
        try {
            return await this.tenantService.getTenantById(id);
        }
        catch (error) {
            this.rethrowOrWrap(error, 'Failed to fetch tenant');
        }
    }
    async updateTenant(id, data) {
        try {
            return await this.tenantService.updateTenant(id, data);
        }
        catch (error) {
            this.rethrowOrWrap(error, 'Failed to update tenant');
        }
    }
    async deleteTenant(id) {
        try {
            return await this.tenantService.deleteTenant(id);
        }
        catch (error) {
            this.rethrowOrWrap(error, 'Failed to delete tenant');
        }
    }
    rethrowOrWrap(error, message) {
        if (error instanceof common_1.HttpException) {
            throw error;
        }
        throw new common_1.HttpException(message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
};
exports.TenantController = TenantController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tenant_validator_1.TenantControllerDTO]),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "createTenant", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Version)('1'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "getAllTenants", null);
__decorate([
    (0, common_1.Get)('tenant/:id'),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "getTenantById", null);
__decorate([
    (0, common_1.Patch)('tenant/:id'),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, tenant_validator_1.UpdateTenantDTO]),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "updateTenant", null);
__decorate([
    (0, common_1.Delete)('tenant/:id'),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "deleteTenant", null);
exports.TenantController = TenantController = __decorate([
    (0, common_1.Controller)('tenants'),
    (0, common_1.UseGuards)(auth_guard_1.KindeAuthGuard),
    __metadata("design:paramtypes", [tenant_service_1.TenantService])
], TenantController);
//# sourceMappingURL=tenant.controller.js.map