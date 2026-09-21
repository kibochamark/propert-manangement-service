import { Role } from "../../generated/prisma/enums";
import { PrismaService } from "../prismaservice/prismaservice.service";
export declare class UsersRepository {
    private readonly prisma;
    private logger;
    constructor(prisma: PrismaService);
    findById(id: string): Promise<{
        id: string;
        kindeId: string;
        email: string;
        name: string | null;
        role: Role;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    findByEmail(email: string): Promise<{
        id: string;
        kindeId: string;
        email: string;
        name: string | null;
        role: Role;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    createUser(data: {
        name: string;
        email: string;
        kindeId: string;
        role?: Role;
    }): Promise<{
        id: string;
        kindeId: string;
        email: string;
        name: string | null;
        role: Role;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findUserByKindeId(kindeId: string): Promise<{
        id: string;
        kindeId: string;
        email: string;
        name: string | null;
        role: Role;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    findAll(): Promise<{
        id: string;
        kindeId: string;
        email: string;
        name: string | null;
        role: Role;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    deleteUser(id: string): Promise<{
        id: string;
        kindeId: string;
        email: string;
        name: string | null;
        role: Role;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateUser(id: string, data: {
        name?: string;
        email?: string;
        kindeId?: string;
        role?: Role;
    }): Promise<{
        id: string;
        kindeId: string;
        email: string;
        name: string | null;
        role: Role;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
