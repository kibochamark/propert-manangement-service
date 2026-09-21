import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, UseGuards, Version } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDTO } from 'src/validators/user.validator';
import { KindeAuthGuard } from 'src/guards/auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    @Version('1')
    async createUser(@Body () data :UsersDTO ) {
        try{
            const user = await this.usersService.createUser(data)

            return user;

        }catch(e){
            throw new HttpException('Failed to create user', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Get()
    @UseGuards(KindeAuthGuard) // Apply the KindeAuthGuard to protect this route
    @Version('1')
    async getAllUsers() {
        try{
            const users = await this.usersService.getAllUsers();
            return users;
        }catch(e){
            throw new HttpException('Failed to fetch users', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('user/:id')
    @UseGuards(KindeAuthGuard) 
    @Version('1')
    async getUserById(@Param('id') id: string) {
        try{
            const user = await this.usersService.getUserById(id);
            if(!user){
                throw new HttpException('User not found', HttpStatus.NOT_FOUND);
            }
            return user;
        }catch(e){
            throw new HttpException('Failed to fetch user', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Patch('user/:id')
    @UseGuards(KindeAuthGuard) 
    @Version('1')
    async updateUser(@Param('id') id: string, @Body() data: Partial<UsersDTO>) {
        try{
            const user = await this.usersService.updateUser(id, data);
            return user;
        }catch(e){
            throw new HttpException('Failed to update user', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Delete('user/:id')
    @UseGuards(KindeAuthGuard) 
    @Version('1')
    async deleteUser(@Param('id') id: string) {
        try{
            const user = await this.usersService.deleteUser(id);
            return user;
        }catch(e){
            throw new HttpException('Failed to delete user', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('user/kinde/:kindeId')
    @UseGuards(KindeAuthGuard) 
    @Version('1')
    async findUserByKindeId(@Param('kindeId') kindeId: string) {
        try{
            const user = await this.usersService.findUserByKindeId(kindeId);
            if(!user){
                throw new HttpException('User not found', HttpStatus.NOT_FOUND);
            }
            return user;
        }catch(e){
            throw new HttpException('Failed to fetch user', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
