import { PrismaService } from "../prismaservice/prismaservice.service";
import { Tenancy } from "../types/tenancy";
export declare class TenancyRepository {
    private readonly prismaService;
    private logger;
    constructor(prismaService: PrismaService);
    findById(id: string): Promise<Tenancy | null>;
    findByHouse(houseId: string): Promise<Tenancy[]>;
    findActiveByHouse(houseId: string): Promise<Tenancy | null>;
}
