import { PrismaService } from "../prismaservice/prismaservice.service";
import { CreateTenantInput, Tenant, UpdateTenantInput } from "../types/tenant";
export declare class TenantRepository {
    private readonly prismaService;
    private logger;
    constructor(prismaService: PrismaService);
    create(input: CreateTenantInput): Promise<Tenant>;
    findById(id: string): Promise<Tenant | null>;
    findAll(): Promise<Tenant[]>;
    update(id: string, input: UpdateTenantInput): Promise<Tenant>;
    delete(id: string): Promise<Tenant>;
}
