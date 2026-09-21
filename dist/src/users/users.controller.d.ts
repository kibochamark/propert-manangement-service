import { UsersService } from './users.service';
import { UsersDTO } from "../validators/user.validator";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(data: UsersDTO): Promise<{
        id: string;
        kindeId: string;
        email: string;
        name: string | null;
        role: import("../../generated/prisma/enums").Role;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
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
    getUserById(id: string): Promise<{
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
    }>;
}
