import { Injectable, Logger } from '@nestjs/common';
import { Role } from 'generated/prisma/enums';
import { PrismaService } from 'src/prismaservice/prismaservice.service';

@Injectable()
export class UsersRepository {
    private logger = new Logger(UsersRepository.name);
    constructor(private readonly prisma: PrismaService) {}


    async findById(id: string) {
        this.logger.log(`Finding user with ID: ${id}`);
        return this.prisma.user.findUnique({
            where: { id },
        });
    }

    async findByEmail(email: string) {
        this.logger.log(`Finding user with email: ${email}`);
        return this.prisma.user.findUnique({
            where: { email },
        });
    }

    async createUser(data: { name:string; email: string; kindeId: string; role?: Role }) {
        this.logger.log(`Creating user with email: ${data.email}`);
        return this.prisma.user.create({
            data,
        });
    }

    async findUserByKindeId(kindeId: string) {
        this.logger.log(`Finding user with Kinde ID: ${kindeId}`);
        return this.prisma.user.findUnique({
            where: { kindeId },
        });
    }


    async findAll() {
        this.logger.log('Finding all users');
        return this.prisma.user.findMany();
    }

    async deleteUser(id: string) {
        this.logger.log(`Deleting user with ID: ${id}`);
        return this.prisma.user.delete({
            where: { id },
        });
    }


    async updateUser(id: string, data: { name?: string; email?: string; kindeId?: string; role?: Role }) {
        this.logger.log(`Updating user with ID: ${id}`);
        return this.prisma.user.update({
            where: { id },
            data,
        });
    }

}
