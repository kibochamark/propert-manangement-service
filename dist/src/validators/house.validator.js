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
exports.UpdateHouseStatusDTO = exports.UpdateHouseDTO = exports.HouseControllerDTO = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../generated/prisma/enums");
class HouseControllerDTO {
    propertyId;
    unitNumber;
    houseType;
    waterMeterNumber;
    defaultMonthlyRent;
    defaultDepositAmount;
    notes;
}
exports.HouseControllerDTO = HouseControllerDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HouseControllerDTO.prototype, "propertyId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HouseControllerDTO.prototype, "unitNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], HouseControllerDTO.prototype, "houseType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], HouseControllerDTO.prototype, "waterMeterNumber", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], HouseControllerDTO.prototype, "defaultMonthlyRent", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], HouseControllerDTO.prototype, "defaultDepositAmount", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], HouseControllerDTO.prototype, "notes", void 0);
class UpdateHouseDTO extends (0, mapped_types_1.PartialType)((0, mapped_types_1.OmitType)(HouseControllerDTO, ['propertyId'])) {
}
exports.UpdateHouseDTO = UpdateHouseDTO;
class UpdateHouseStatusDTO {
    status;
    reason;
}
exports.UpdateHouseStatusDTO = UpdateHouseStatusDTO;
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.HouseStatus),
    __metadata("design:type", String)
], UpdateHouseStatusDTO.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateHouseStatusDTO.prototype, "reason", void 0);
//# sourceMappingURL=house.validator.js.map