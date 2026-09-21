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
exports.HouseService = void 0;
const common_1 = require("@nestjs/common");
const house_repository_1 = require("./house.repository");
const client_1 = require("../../generated/prisma/client");
let HouseService = class HouseService {
    houseRepository;
    constructor(houseRepository) {
        this.houseRepository = houseRepository;
    }
    async createHouse(input) {
        try {
            return await this.houseRepository.create(input);
        }
        catch (error) {
            console.log(error.message);
            throw this.toHttpError(error, input.propertyId, input.unitNumber);
        }
    }
    async getHouseById(id) {
        const house = await this.houseRepository.findById(id);
        if (!house) {
            throw new common_1.NotFoundException(`House ${id} not found`);
        }
        return house;
    }
    async getHousesByPropertyId(id) {
        const houses = await this.houseRepository.findHousesByPropertyId(id);
        if (!houses) {
            return [];
        }
        return houses;
    }
    async getAllHouses(filter = {}) {
        return this.houseRepository.findAll(filter);
    }
    async getHousesByProperty(propertyId) {
        return this.houseRepository.findAll({ propertyId });
    }
    async updateHouse(id, input) {
        await this.getHouseById(id);
        try {
            return await this.houseRepository.update(id, input);
        }
        catch (error) {
            throw this.toHttpError(error);
        }
    }
    async changeStatus(id, status, reason) {
        const house = await this.getHouseById(id);
        let notes = house.notes ?? undefined;
        if (reason) {
            const entry = `[${new Date().toISOString()}] Status → ${status}: ${reason}`;
            notes = house.notes ? `${house.notes}\n${entry}` : entry;
        }
        return this.houseRepository.updateStatus(id, status, notes);
    }
    async deleteHouse(id) {
        await this.getHouseById(id);
        return this.houseRepository.delete(id);
    }
    toHttpError(error, propertyId, unitNumber) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            switch (error.code) {
                case 'P2002':
                    return new common_1.ConflictException(unitNumber
                        ? `This property already has a house numbered "${unitNumber}"`
                        : 'A house with these details already exists');
                case 'P2003':
                    return new common_1.BadRequestException(propertyId ? `Property "${propertyId}" does not exist` : 'Referenced record does not exist');
                case 'P2025':
                    return new common_1.NotFoundException('House not found');
            }
        }
        return error;
    }
};
exports.HouseService = HouseService;
exports.HouseService = HouseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [house_repository_1.HouseRepository])
], HouseService);
//# sourceMappingURL=house.service.js.map