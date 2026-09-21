export type { Tenant } from '../../generated/prisma/client';
export { TenantStatus } from '../../generated/prisma/enums';
export interface CreateTenantInput {
    fullName: string;
    phone: string;
    altPhone?: string;
    nationalId?: string;
    email?: string;
    occupation?: string;
    emergencyContactName?: string;
    emergencyContactPhone?: string;
}
export type UpdateTenantInput = Partial<CreateTenantInput>;
