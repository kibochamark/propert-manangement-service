import { PropertyService } from './property.service';
import { PropertyControllerDTO } from "../validators/property.validator";
export declare class PropertyController {
    private readonly propertyService;
    constructor(propertyService: PropertyService);
    createProperty(data: PropertyControllerDTO, req: any): Promise<{
        name: string;
        id: string;
        ownerId: string;
        address: string;
        location: string | null;
        description: string | null;
        defaultWaterRate: import("@prisma/client/runtime/index-browser").Decimal;
        currency: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllProperties(): Promise<{
        name: string;
        id: string;
        ownerId: string;
        address: string;
        location: string | null;
        description: string | null;
        defaultWaterRate: import("@prisma/client/runtime/index-browser").Decimal;
        currency: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getPropertyById(id: string): Promise<{
        name: string;
        id: string;
        ownerId: string;
        address: string;
        location: string | null;
        description: string | null;
        defaultWaterRate: import("@prisma/client/runtime/index-browser").Decimal;
        currency: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateProperty(id: string, data: Partial<PropertyControllerDTO>): Promise<{
        name: string;
        id: string;
        ownerId: string;
        address: string;
        location: string | null;
        description: string | null;
        defaultWaterRate: import("@prisma/client/runtime/index-browser").Decimal;
        currency: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteProperty(id: string): Promise<{
        name: string;
        id: string;
        ownerId: string;
        address: string;
        location: string | null;
        description: string | null;
        defaultWaterRate: import("@prisma/client/runtime/index-browser").Decimal;
        currency: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findPropertiesByOwnerId(ownerId: string): Promise<{
        name: string;
        id: string;
        ownerId: string;
        address: string;
        location: string | null;
        description: string | null;
        defaultWaterRate: import("@prisma/client/runtime/index-browser").Decimal;
        currency: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
