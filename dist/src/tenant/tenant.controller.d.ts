import { TenantService } from './tenant.service';
import { TenantControllerDTO, UpdateTenantDTO } from "../validators/tenant.validator";
export declare class TenantController {
    private readonly tenantService;
    constructor(tenantService: TenantService);
    createTenant(data: TenantControllerDTO): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string | null;
        status: import("../types/tenant").TenantStatus;
        fullName: string;
        phone: string;
        altPhone: string | null;
        nationalId: string | null;
        occupation: string | null;
        emergencyContactName: string | null;
        emergencyContactPhone: string | null;
    }>;
    getAllTenants(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string | null;
        status: import("../types/tenant").TenantStatus;
        fullName: string;
        phone: string;
        altPhone: string | null;
        nationalId: string | null;
        occupation: string | null;
        emergencyContactName: string | null;
        emergencyContactPhone: string | null;
    }[]>;
    getTenantById(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string | null;
        status: import("../types/tenant").TenantStatus;
        fullName: string;
        phone: string;
        altPhone: string | null;
        nationalId: string | null;
        occupation: string | null;
        emergencyContactName: string | null;
        emergencyContactPhone: string | null;
    }>;
    updateTenant(id: string, data: UpdateTenantDTO): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string | null;
        status: import("../types/tenant").TenantStatus;
        fullName: string;
        phone: string;
        altPhone: string | null;
        nationalId: string | null;
        occupation: string | null;
        emergencyContactName: string | null;
        emergencyContactPhone: string | null;
    }>;
    deleteTenant(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string | null;
        status: import("../types/tenant").TenantStatus;
        fullName: string;
        phone: string;
        altPhone: string | null;
        nationalId: string | null;
        occupation: string | null;
        emergencyContactName: string | null;
        emergencyContactPhone: string | null;
    }>;
    private rethrowOrWrap;
}
