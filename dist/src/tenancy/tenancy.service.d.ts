import { PrismaService } from "../prismaservice/prismaservice.service";
import { TenancyRepository } from './tenancy.repository';
import { MoveInInput, Tenancy } from "../types/tenancy";
export declare class TenancyService {
    private readonly prismaService;
    private readonly tenancyRepository;
    constructor(prismaService: PrismaService, tenancyRepository: TenancyRepository);
    moveIn(input: MoveInInput, createdById: string): Promise<Tenancy>;
    getTenancyById(id: string): Promise<Tenancy>;
    getTenancyHistoryForHouse(houseId: string): Promise<Tenancy[]>;
    getActiveTenancyForHouse(houseId: string): Promise<Tenancy | null>;
}
