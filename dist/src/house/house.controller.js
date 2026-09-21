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
exports.HouseController = void 0;
const common_1 = require("@nestjs/common");
const house_service_1 = require("./house.service");
const house_validator_1 = require("../validators/house.validator");
const enums_1 = require("../../generated/prisma/enums");
const auth_guard_1 = require("../guards/auth.guard");
let HouseController = class HouseController {
    houseService;
    constructor(houseService) {
        this.houseService = houseService;
    }
    async createHouse(data) {
        try {
            const input = { ...data };
            return await this.houseService.createHouse(input);
        }
        catch (error) {
            this.rethrowOrWrap(error, 'Failed to create house');
        }
    }
    async getAllHouses(propertyId, status) {
        try {
            return await this.houseService.getAllHouses({ propertyId, status });
        }
        catch (error) {
            this.rethrowOrWrap(error, 'Failed to fetch houses');
        }
    }
    async getHousesByProperty(propertyId) {
        try {
            return await this.houseService.getHousesByProperty(propertyId);
        }
        catch (error) {
            this.rethrowOrWrap(error, 'Failed to fetch houses for property');
        }
    }
    async getHouseById(id) {
        try {
            return await this.houseService.getHouseById(id);
        }
        catch (error) {
            this.rethrowOrWrap(error, 'Failed to fetch house');
        }
    }
    async updateHouse(id, data) {
        try {
            return await this.houseService.updateHouse(id, data);
        }
        catch (error) {
            this.rethrowOrWrap(error, 'Failed to update house');
        }
    }
    async changeHouseStatus(id, data) {
        try {
            return await this.houseService.changeStatus(id, data.status, data.reason);
        }
        catch (error) {
            this.rethrowOrWrap(error, 'Failed to change house status');
        }
    }
    async deleteHouse(id) {
        try {
            return await this.houseService.deleteHouse(id);
        }
        catch (error) {
            this.rethrowOrWrap(error, 'Failed to delete house');
        }
    }
    rethrowOrWrap(error, message) {
        if (error instanceof common_1.HttpException) {
            throw error;
        }
        throw new common_1.HttpException(message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
};
exports.HouseController = HouseController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [house_validator_1.HouseControllerDTO]),
    __metadata("design:returntype", Promise)
], HouseController.prototype, "createHouse", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Query)('propertyId')),
    __param(1, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], HouseController.prototype, "getAllHouses", null);
__decorate([
    (0, common_1.Get)('property/:propertyId'),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Param)('propertyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HouseController.prototype, "getHousesByProperty", null);
__decorate([
    (0, common_1.Get)('house/:id'),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HouseController.prototype, "getHouseById", null);
__decorate([
    (0, common_1.Patch)('house/:id'),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, house_validator_1.UpdateHouseDTO]),
    __metadata("design:returntype", Promise)
], HouseController.prototype, "updateHouse", null);
__decorate([
    (0, common_1.Patch)('house/:id/status'),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, house_validator_1.UpdateHouseStatusDTO]),
    __metadata("design:returntype", Promise)
], HouseController.prototype, "changeHouseStatus", null);
__decorate([
    (0, common_1.Delete)('house/:id'),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HouseController.prototype, "deleteHouse", null);
exports.HouseController = HouseController = __decorate([
    (0, common_1.Controller)('houses'),
    (0, common_1.UseGuards)(auth_guard_1.KindeAuthGuard),
    __metadata("design:paramtypes", [house_service_1.HouseService])
], HouseController);
//# sourceMappingURL=house.controller.js.map