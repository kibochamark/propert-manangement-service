import { ChargeType } from '../../generated/prisma/enums';

// Re-export Prisma's own generated types for reads.
export type { Charge } from '../../generated/prisma/client';
export { ChargeType };

// What a caller supplies to record a charge. This is deliberately generic —
// it's used for rent (by the rent job), and directly by the owner for any
// post-paid charge (water, trash, security, service fee) once the amount
// is known. periodMonth is optional: a recurring monthly charge sets it
// (and can't be duplicated for the same tenancy+type+month — see the
// unique constraint on Charge), a one-off charge leaves it out.
export interface CreateChargeInput {
  tenancyId: string;
  type: ChargeType;
  amount: number;
  periodMonth?: Date;
  description?: string;
  dueDate?: Date;
}
