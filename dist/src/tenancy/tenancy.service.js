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
exports.TenancyService = void 0;
const common_1 = require("@nestjs/common");
const prismaservice_service_1 = require("../prismaservice/prismaservice.service");
const tenancy_repository_1 = require("./tenancy.repository");
let TenancyService = class TenancyService {
    prismaService;
    tenancyRepository;
    constructor(prismaService, tenancyRepository) {
        this.prismaService = prismaService;
        this.tenancyRepository = tenancyRepository;
    }
    async moveIn(input, createdById) {
        const depositRequired = input.depositRequired ?? input.monthlyRent;
        return this.prismaService.$transaction(async (tx) => {
            const house = await tx.house.findUnique({ where: { id: input.houseId } });
            if (!house) {
                throw new common_1.NotFoundException(`House ${input.houseId} not found`);
            }
            const existingActive = await tx.tenancy.findFirst({
                where: { houseId: input.houseId, status: 'ACTIVE' },
            });
            console.log(existingActive);
            if (existingActive) {
                throw new common_1.ConflictException(`House ${input.houseId} already has an active tenant`);
            }
            const tenant = await tx.tenant.findUnique({ where: { id: input.tenantId } });
            if (!tenant) {
                throw new common_1.NotFoundException(`Tenant ${input.tenantId} not found`);
            }
            const tenantAlreadyActive = await tx.tenancy.findFirst({
                where: { tenantId: input.tenantId, status: 'ACTIVE' },
            });
            if (tenantAlreadyActive) {
                throw new common_1.ConflictException('This tenant already has an active tenancy elsewhere');
            }
            const tenancy = await tx.tenancy.create({
                data: {
                    houseId: input.houseId,
                    tenantId: input.tenantId,
                    monthlyRent: input.monthlyRent,
                    depositRequired,
                    startDate: input.startDate,
                    expectedEndDate: input.expectedEndDate,
                    openingWaterReading: input.openingWaterReading,
                    notes: input.notes,
                },
                include: { tenant: true },
            });
            await tx.charge.create({
                data: {
                    tenancyId: tenancy.id,
                    type: 'RENTDEPOSIT',
                    amount: depositRequired,
                    description: 'Security deposit',
                    createdById,
                },
            });
            await tx.house.update({
                where: { id: input.houseId },
                data: { status: 'OCCUPIED' },
            });
            return tenancy;
        });
    }
    async getTenancyById(id) {
        const tenancy = await this.tenancyRepository.findById(id);
        if (!tenancy) {
            throw new common_1.NotFoundException(`Tenancy ${id} not found`);
        }
        return tenancy;
    }
    async getTenancyHistoryForHouse(houseId) {
        return this.tenancyRepository.findByHouse(houseId);
    }
    async getActiveTenancyForHouse(houseId) {
        return this.tenancyRepository.findActiveByHouse(houseId);
    }
};
exports.TenancyService = TenancyService;
exports.TenancyService = TenancyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prismaservice_service_1.PrismaService,
        tenancy_repository_1.TenancyRepository])
], TenancyService);
//# sourceMappingURL=tenancy.service.js.map