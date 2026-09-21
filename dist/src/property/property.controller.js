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
exports.PropertyController = void 0;
const common_1 = require("@nestjs/common");
const property_service_1 = require("./property.service");
const property_validator_1 = require("../validators/property.validator");
const auth_guard_1 = require("../guards/auth.guard");
let PropertyController = class PropertyController {
    propertyService;
    constructor(propertyService) {
        this.propertyService = propertyService;
    }
    async createProperty(data, req) {
        try {
            const ownerId = req.user.id;
            const input = {
                name: data.name,
                address: data.address,
                ownerId: ownerId,
                location: data.location,
                description: data.description,
                defaultWaterRate: data.defaultWaterRate,
                currency: data.currency,
            };
            const property = await this.propertyService.createProperty(input);
            return property;
        }
        catch (error) {
            throw new common_1.HttpException('Failed to create property', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAllProperties() {
        try {
            const properties = await this.propertyService.getAllProperties();
            return properties;
        }
        catch (error) {
            throw new common_1.HttpException('Failed to fetch properties', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getPropertyById(id) {
        try {
            const property = await this.propertyService.getPropertyById(id);
            if (!property) {
                throw new common_1.HttpException('Property not found', common_1.HttpStatus.NOT_FOUND);
            }
            return property;
        }
        catch (error) {
            throw new common_1.HttpException('Failed to fetch property', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateProperty(id, data) {
        try {
            const property = await this.propertyService.updateProperty(id, data);
            return property;
        }
        catch (error) {
            throw new common_1.HttpException('Failed to update property', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteProperty(id) {
        try {
            const property = await this.propertyService.deleteProperty(id);
            return property;
        }
        catch (error) {
            throw new common_1.HttpException('Failed to delete property', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findPropertiesByOwnerId(ownerId) {
        try {
            const properties = await this.propertyService.findPropertiesByOwnerId(ownerId);
            return properties;
        }
        catch (error) {
            throw new common_1.HttpException('Failed to fetch properties by owner', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.PropertyController = PropertyController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [property_validator_1.PropertyControllerDTO, Object]),
    __metadata("design:returntype", Promise)
], PropertyController.prototype, "createProperty", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Version)('1'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PropertyController.prototype, "getAllProperties", null);
__decorate([
    (0, common_1.Get)('property/:id'),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PropertyController.prototype, "getPropertyById", null);
__decorate([
    (0, common_1.Patch)('property/:id'),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PropertyController.prototype, "updateProperty", null);
__decorate([
    (0, common_1.Delete)('property/:id'),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PropertyController.prototype, "deleteProperty", null);
__decorate([
    (0, common_1.Get)('owner/:ownerId'),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Param)('ownerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PropertyController.prototype, "findPropertiesByOwnerId", null);
exports.PropertyController = PropertyController = __decorate([
    (0, common_1.Controller)('properties'),
    (0, common_1.UseGuards)(auth_guard_1.KindeAuthGuard),
    __metadata("design:paramtypes", [property_service_1.PropertyService])
], PropertyController);
//# sourceMappingURL=property.controller.js.map