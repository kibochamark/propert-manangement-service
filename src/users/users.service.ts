import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { UsersDTO } from 'src/validators/user.validator';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}

    async getUserById(id: string) {
        // Implement logic to retrieve user by ID
        return this.usersRepository.findById(id);
    }

    async createUser(data: { name: string; email: string; kindeId: string }) {
        // Implement logic to create a new user
        return this.usersRepository.createUser(data);
    }

    async updateUser(id: string, data: Partial<UsersDTO>) {
        // Implement logic to update user information
        return this.usersRepository.updateUser(id, data);
    }

    async deleteUser(id: string) {
        // Implement logic to delete a user
        return this.usersRepository.deleteUser(id);
    }

    async findUserByKindeId(kindeId: string) {
        // Implement logic to find a user by Kinde ID
        return this.usersRepository.findUserByKindeId(kindeId);
    }

    async getAllUsers() {
        // Implement logic to retrieve all users
        return this.usersRepository.findAll();
    }
}
