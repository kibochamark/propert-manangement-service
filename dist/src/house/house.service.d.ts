import { HouseFilter, HouseRepository } from './house.repository';
import { CreateHouseInput, House, UpdateHouseInput } from "../types/house";
import { HouseStatus } from "../../generated/prisma/enums";
export declare class HouseService {
    private readonly houseRepository;
    constructor(houseRepository: HouseRepository);
    createHouse(input: CreateHouseInput): Promise<House>;
    getHouseById(id: string): Promise<House>;
    getHousesByPropertyId(id: string): Promise<House[] | []>;
    getAllHouses(filter?: HouseFilter): Promise<House[]>;
    getHousesByProperty(propertyId: string): Promise<House[]>;
    updateHouse(id: string, input: UpdateHouseInput): Promise<House>;
    changeStatus(id: string, status: HouseStatus, reason?: string): Promise<House>;
    deleteHouse(id: string): Promise<House>;
    private toHttpError;
}
