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
exports.RentController = void 0;
const common_1 = require("@nestjs/common");
const rent_service_1 = require("./rent.service");
const rent_validator_1 = require("../validators/rent.validator");
const auth_guard_1 = require("../guards/auth.guard");
let RentController = class RentController {
    rentService;
    constructor(rentService) {
        this.rentService = rentService;
    }
    async generateRent(data, req) {
        try {
            const targetMonth = data.month ? new Date(data.month) : new Date();
            return await this.rentService.generateRentForMonth(targetMonth, req.user.id);
        }
        catch (error) {
            this.rethrowOrWrap(error, 'Failed to generate rent');
        }
    }
    rethrowOrWrap(error, message) {
        if (error instanceof common_1.HttpException) {
            throw error;
        }
        throw new common_1.HttpException(message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
};
exports.RentController = RentController;
__decorate([
    (0, common_1.Post)('generate'),
    (0, common_1.Version)('1'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rent_validator_1.GenerateRentDTO, Object]),
    __metadata("design:returntype", Promise)
], RentController.prototype, "generateRent", null);
exports.RentController = RentController = __decorate([
    (0, common_1.Controller)('rent'),
    (0, common_1.UseGuards)(auth_guard_1.KindeAuthGuard),
    __metadata("design:paramtypes", [rent_service_1.RentService])
], RentController);
//# sourceMappingURL=rent.controller.js.map