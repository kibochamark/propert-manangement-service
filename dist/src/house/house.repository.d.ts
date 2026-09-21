import { PrismaService } from "../prismaservice/prismaservice.service";
import { HouseStatus } from "../../generated/prisma/enums";
import { CreateHouseInput, House, UpdateHouseInput } from "../types/house";
export interface HouseFilter {
    propertyId?: string;
    status?: HouseStatus;
}
export declare class HouseRepository {
    private readonly prismaService;
    private logger;
    constructor(prismaService: PrismaService);
    create(input: CreateHouseInput): Promise<House>;
    findById(id: string): Promise<House | null>;
    findHousesByPropertyId(id: string): Promise<House[]>;
    findAll(filter?: HouseFilter): Promise<House[]>;
    update(id: string, input: UpdateHouseInput): Promise<House>;
    updateStatus(id: string, status: HouseStatus, notes?: string): Promise<House>;
    delete(id: string): Promise<House>;
}
