// Re-export Prisma's own generated types for reads — always correct as
// the schema evolves, no hand-maintained copy to drift out of sync.
export type { Tenant } from '../../generated/prisma/client';
export { TenantStatus } from '../../generated/prisma/enums';

// 2.1 — what a caller supplies to record a tenant. Everything but the
// two ways to reach them (name, phone) is optional: the owner should be
// able to save a tenant's basic details today and fill in the rest later.
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
