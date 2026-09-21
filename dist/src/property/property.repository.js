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
exports.PropertyRepository = void 0;
const common_1 = require("@nestjs/common");
const prismaservice_service_1 = require("../prismaservice/prismaservice.service");
let PropertyRepository = class PropertyRepository {
    prismaService;
    logger = new common_1.Logger('PropertyRepository');
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(input) {
        this.logger.log(`Creating property with name: ${input.name}`);
        return this.prismaService.property.create({
            data: {
                name: input.name,
                address: input.address,
                ownerId: input.ownerId,
                location: input.location,
                description: input.description,
                defaultWaterRate: input.defaultWaterRate,
                currency: input.currency,
            },
        });
    }
    async findById(id) {
        this.logger.log(`Finding property with ID: ${id}`);
        return this.prismaService.property.findUnique({
            where: { id },
            include: {
                owner: {
                    select: {
                        id: true,
                        name: true,
                        kindeId: true
                    },
                }
            },
        });
    }
    async findAll() {
        this.logger.log(`Finding all properties`);
        return this.prismaService.property.findMany({
            include: {
                owner: {
                    select: {
                        id: true,
                        name: true,
                        kindeId: true
                    },
                }
            },
        });
    }
    async update(id, input) {
        this.logger.log(`Updating property with ID: ${id}`);
        return this.prismaService.property.update({
            where: { id },
            data: input,
        });
    }
    async delete(id) {
        this.logger.log(`Deleting property with ID: ${id}`);
        return this.prismaService.property.delete({
            where: { id },
        });
    }
    async findByOwnerId(ownerId) {
        this.logger.log(`Finding properties with owner ID: ${ownerId}`);
        return this.prismaService.property.findMany({
            where: { ownerId },
            include: {
                owner: {
                    select: {
                        id: true,
                        name: true,
                        kindeId: true
                    },
                }
            },
        });
    }
};
exports.PropertyRepository = PropertyRepository;
exports.PropertyRepository = PropertyRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prismaservice_service_1.PrismaService])
], PropertyRepository);
//# sourceMappingURL=property.repository.js.map