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
var TenancyRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenancyRepository = void 0;
const common_1 = require("@nestjs/common");
const prismaservice_service_1 = require("../prismaservice/prismaservice.service");
const WITH_TENANT = { tenant: true };
let TenancyRepository = TenancyRepository_1 = class TenancyRepository {
    prismaService;
    logger = new common_1.Logger(TenancyRepository_1.name);
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findById(id) {
        this.logger.log(`Finding tenancy with ID: ${id}`);
        return this.prismaService.tenancy.findUnique({
            where: { id },
            include: WITH_TENANT,
        });
    }
    async findByHouse(houseId) {
        this.logger.log(`Finding tenancy history for house: ${houseId}`);
        return this.prismaService.tenancy.findMany({
            where: { houseId },
            include: WITH_TENANT,
            orderBy: { startDate: 'desc' },
        });
    }
    async findActiveByHouse(houseId) {
        return this.prismaService.tenancy.findFirst({
            where: { houseId, status: 'ACTIVE' },
            include: WITH_TENANT,
        });
    }
};
exports.TenancyRepository = TenancyRepository;
exports.TenancyRepository = TenancyRepository = TenancyRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prismaservice_service_1.PrismaService])
], TenancyRepository);
//# sourceMappingURL=tenancy.repository.js.map