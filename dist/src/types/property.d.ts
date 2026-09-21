export type { Property } from '../../generated/prisma/client';
export interface CreatePropertyInput {
    name: string;
    address: string;
    ownerId: string;
    location?: string;
    description?: string;
    defaultWaterRate?: number;
    currency?: string;
}
