import { UsersRepository } from './users.repository';
import { UsersDTO } from "../validators/user.validator";
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    getUserById(id: string): Promise<{
        id: string;
        kindeId: string;
        email: string;
        name: string | null;
        role: import("../../generated/prisma/enums").Role;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    createUser(data: {
        name: string;
        email: string;
        kindeId: string;
    }): Promise<{
        id: string;
        kindeId: string;
        email: string;
        name: string | null;
        role: import("../../generated/prisma/enums").Role;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateUser(id: string, data: Partial<UsersDTO>): Promise<{
        id: string;
        kindeId: string;
        email: string;
        name: string | null;
        role: import("../../generated/prisma/enums").Role;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteUser(id: string): Promise<{
        id: string;
        kindeId: string;
        email: string;
        name: string | null;
        role: import("../../generated/prisma/enums").Role;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findUserByKindeId(kindeId: string): Promise<{
        id: string;
        kindeId: string;
        email: string;
        name: string | null;
        role: import("../../generated/prisma/enums").Role;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    getAllUsers(): Promise<{
        id: string;
        kindeId: string;
        email: string;
        name: string | null;
        role: import("../../generated/prisma/enums").Role;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
