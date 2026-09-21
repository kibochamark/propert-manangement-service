import { PropertyService } from './property.service';
import { PropertyControllerDTO } from "../validators/property.validator";
export declare class PropertyController {
    private readonly propertyService;
    constructor(propertyService: PropertyService);
    createProperty(data: PropertyControllerDTO, req: any): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        ownerId: string;
        address: string;
        location: string | null;
        description: string | null;
        defaultWaterRate: import("@prisma/client/runtime/index-browser").Decimal;
        currency: string;
    }>;
    getAllProperties(): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        ownerId: string;
        address: string;
        location: string | null;
        description: string | null;
        defaultWaterRate: import("@prisma/client/runtime/index-browser").Decimal;
        currency: string;
    }[]>;
    getPropertyById(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        ownerId: string;
        address: string;
        location: string | null;
        description: string | null;
        defaultWaterRate: import("@prisma/client/runtime/index-browser").Decimal;
        currency: string;
    }>;
    updateProperty(id: string, data: Partial<PropertyControllerDTO>): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        ownerId: string;
        address: string;
        location: string | null;
        description: string | null;
        defaultWaterRate: import("@prisma/client/runtime/index-browser").Decimal;
        currency: string;
    }>;
    deleteProperty(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        ownerId: string;
        address: string;
        location: string | null;
        description: string | null;
        defaultWaterRate: import("@prisma/client/runtime/index-browser").Decimal;
        currency: string;
    }>;
    findPropertiesByOwnerId(ownerId: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        ownerId: string;
        address: string;
        location: string | null;
        description: string | null;
        defaultWaterRate: import("@prisma/client/runtime/index-browser").Decimal;
        currency: string;
    }[]>;
}
