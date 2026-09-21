import { UsersService } from './users.service';
import { UsersDTO } from "../validators/user.validator";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(data: UsersDTO): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        kindeId: string;
        email: string;
        role: import("../../generated/prisma/enums").Role;
        isActive: boolean;
    }>;
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
    getUserById(id: string): Promise<{
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
    }>;
}
