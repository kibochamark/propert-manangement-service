import { TenantService } from './tenant.service';
import { TenantControllerDTO, UpdateTenantDTO } from "../validators/tenant.validator";
export declare class TenantController {
    private readonly tenantService;
    constructor(tenantService: TenantService);
    createTenant(data: TenantControllerDTO): Promise<{
        id: string;
        fullName: string;
        phone: string;
        altPhone: string | null;
        nationalId: string | null;
        email: string | null;
        occupation: string | null;
        emergencyContactName: string | null;
        emergencyContactPhone: string | null;
        status: import("../types/tenant").TenantStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllTenants(): Promise<{
        id: string;
        fullName: string;
        phone: string;
        altPhone: string | null;
        nationalId: string | null;
        email: string | null;
        occupation: string | null;
        emergencyContactName: string | null;
        emergencyContactPhone: string | null;
        status: import("../types/tenant").TenantStatus;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getTenantById(id: string): Promise<{
        id: string;
        fullName: string;
        phone: string;
        altPhone: string | null;
        nationalId: string | null;
        email: string | null;
        occupation: string | null;
        emergencyContactName: string | null;
        emergencyContactPhone: string | null;
        status: import("../types/tenant").TenantStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateTenant(id: string, data: UpdateTenantDTO): Promise<{
        id: string;
        fullName: string;
        phone: string;
        altPhone: string | null;
        nationalId: string | null;
        email: string | null;
        occupation: string | null;
        emergencyContactName: string | null;
        emergencyContactPhone: string | null;
        status: import("../types/tenant").TenantStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteTenant(id: string): Promise<{
        id: string;
        fullName: string;
        phone: string;
        altPhone: string | null;
        nationalId: string | null;
        email: string | null;
        occupation: string | null;
        emergencyContactName: string | null;
        emergencyContactPhone: string | null;
        status: import("../types/tenant").TenantStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    private rethrowOrWrap;
}
