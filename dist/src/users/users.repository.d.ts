import { Role } from "../../generated/prisma/enums";
import { PrismaService } from "../prismaservice/prismaservice.service";
export declare class UsersRepository {
    private readonly prisma;
    private logger;
    constructor(prisma: PrismaService);
    findById(id: string): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        kindeId: string;
        email: string;
        role: Role;
        isActive: boolean;
    } | null>;
    findByEmail(email: string): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        kindeId: string;
        email: string;
        role: Role;
        isActive: boolean;
    } | null>;
    createUser(data: {
        name: string;
        email: string;
        kindeId: string;
        role?: Role;
    }): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        kindeId: string;
        email: string;
        role: Role;
        isActive: boolean;
    }>;
    findUserByKindeId(kindeId: string): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        kindeId: string;
        email: string;
        role: Role;
        isActive: boolean;
    } | null>;
    findAll(): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        kindeId: string;
        email: string;
        role: Role;
        isActive: boolean;
    }[]>;
    deleteUser(id: string): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        kindeId: string;
        email: string;
        role: Role;
        isActive: boolean;
    }>;
    updateUser(id: string, data: {
        name?: string;
        email?: string;
        kindeId?: string;
        role?: Role;
    }): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        kindeId: string;
        email: string;
        role: Role;
        isActive: boolean;
    }>;
}
