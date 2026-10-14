import { Body, Controller, Delete, Get, HttpException, HttpStatus, Logger, Param, Patch, Post, Req, Res, UseGuards, Version } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDTO } from 'src/validators/user.validator';
import { KindeAuthGuard } from 'src/guards/auth.guard';
import * as bodyParser from 'body-parser';
import * as jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';
import { ConfigService } from '@nestjs/config';
import * as express from 'express';
@Controller('users')
export class UsersController {
    private readonly logger = new Logger(UsersController.name); // Replace with a proper logger if needed
    private jwtBodyParser = bodyParser.text({ type: 'application/jwt' });
    constructor(private readonly usersService: UsersService, private readonly configService: ConfigService) {}

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


    /**
     * Webhook handler for Kinde user.created event
     * Creates a new account in local database when user signs up in Kinde
     */
    @Post('createwebhook')
    @Version('1')
    async createAccount(@Req() req: express.Request, @Res() res: express.Response) {


        this.jwtBodyParser(req, res, async () => {
            try {
                const token = req.body as unknown; // now contains raw JWT string

                console.log('Received webhook with token:', token);
                console.log('Kinde domain from config:', this.configService.get('KINDE_DOMAIN', 'https://bidmarket.kinde.com'));

                const jswksUri = this.configService.get('KINDE_DOMAIN') + '/.well-known/jwks.json';
                console.log('JWKS URI:', jswksUri);

                const client = jwksClient({
                    jwksUri: jswksUri,
                });

                // / Decode the token
                const { header } = jwt.decode(token as string, { complete: true }) as any;
                const { kid } = header;

                // Verify the token
                const key = await client.getSigningKey(kid);
                const signingKey = key.getPublicKey();
                const event = await jwt.verify(token as string, signingKey) as any;


                console.log('Verified webhook event:', event);

                switch (event.type) {
                    case 'user.created':
                        this.logger.log('Processing user.created event');

                        if (!event.data?.user) {
                            this.logger.error('Webhook event missing user data', event);
                            return res.status(400).json({
                                error: "Invalid event payload: missing event.data.user"
                            });
                        }

                        // map the Kinde user data to your local user model and create a new account in your database
                        const payload = {
                            name: `${event.data.user.first_name || ''} ${event.data.user.last_name || ''}`.trim(),
                            email: event.data.user.email,
                            kindeId: event.data.user.id,
                            role : "ADMIN", // default role, adjust as needed
                            isActive: true, // default active status, adjust as needed
                        }

                        const result = await this.usersService.createUser(payload);
                        return res.status(201).json({ success: true, data: result });
                    default:
                        this.logger.warn(`Unhandled webhook event type: ${event.type}`);
                        return res.status(400).json({ error: 'Unhandled event type', type: event.type });
                }
            } catch (error: any) {
                this.logger.error('Failed to process webhook', error);
                return res.status(500).json({ error: 'Failed to process webhook', details: error?.message });
            }
        });
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
