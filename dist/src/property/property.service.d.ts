import { PropertyRepository } from './property.repository';
import { CreatePropertyInput, Property } from "../types/property";
export declare class PropertyService {
    private readonly propertyRepository;
    constructor(propertyRepository: PropertyRepository);
    createProperty(input: CreatePropertyInput): Promise<Property>;
    getPropertyById(id: string): Promise<Property | null>;
    getAllProperties(): Promise<Property[]>;
    updateProperty(id: string, input: Partial<CreatePropertyInput>): Promise<Property>;
    deleteProperty(id: string): Promise<Property>;
    findPropertiesByOwnerId(ownerId: string): Promise<Property[]>;
}
