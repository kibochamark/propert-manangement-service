import { TenantRepository } from './tenant.repository';
import { CreateTenantInput, Tenant, UpdateTenantInput } from "../types/tenant";
export declare class TenantService {
    private readonly tenantRepository;
    constructor(tenantRepository: TenantRepository);
    createTenant(input: CreateTenantInput): Promise<Tenant>;
    getTenantById(id: string): Promise<Tenant>;
    getAllTenants(): Promise<Tenant[]>;
    updateTenant(id: string, input: UpdateTenantInput): Promise<Tenant>;
    deleteTenant(id: string): Promise<Tenant>;
}
