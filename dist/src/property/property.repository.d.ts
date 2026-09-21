import { PrismaService } from "../prismaservice/prismaservice.service";
import { CreatePropertyInput, Property } from "../types/property";
export declare class PropertyRepository {
    private readonly prismaService;
    private logger;
    constructor(prismaService: PrismaService);
    create(input: CreatePropertyInput): Promise<Property>;
    findById(id: string): Promise<Property | null>;
    findAll(): Promise<Property[]>;
    update(id: string, input: Partial<CreatePropertyInput>): Promise<Property>;
    delete(id: string): Promise<Property>;
    findByOwnerId(ownerId: string): Promise<Property[]>;
}
