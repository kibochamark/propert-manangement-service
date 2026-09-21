import { UsersRepository } from './users.repository';
import { UsersDTO } from "../validators/user.validator";
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    getUserById(id: string): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        kindeId: string;
        email: string;
        role: import("../../generated/prisma/enums").Role;
        isActive: boolean;
    } | null>;
    createUser(data: {
        name: string;
        email: string;
        kindeId: string;
    }): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        kindeId: string;
        email: string;
        role: import("../../generated/prisma/enums").Role;
        isActive: boolean;
    }>;
    updateUser(id: string, data: Partial<UsersDTO>): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        kindeId: string;
        email: string;
        role: import("../../generated/prisma/enums").Role;
        isActive: boolean;
    }>;
    deleteUser(id: string): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        kindeId: string;
        email: string;
        role: import("../../generated/prisma/enums").Role;
        isActive: boolean;
    }>;
    findUserByKindeId(kindeId: string): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        kindeId: string;
        email: string;
        role: import("../../generated/prisma/enums").Role;
        isActive: boolean;
    } | null>;
    getAllUsers(): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        kindeId: string;
        email: string;
        role: import("../../generated/prisma/enums").Role;
        isActive: boolean;
    }[]>;
}
