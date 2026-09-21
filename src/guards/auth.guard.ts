import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prismaservice/prismaservice.service';

@Injectable()
export class KindeAuthGuard implements CanActivate {
    private client: jwksClient.JwksClient;
    private kindeDomain: string;

    constructor(private readonly configService: ConfigService, private readonly prismaService: PrismaService) {
        // Replace with your Kinde domain via config or env variables
        this.kindeDomain = this.configService.get('KINDE_DOMAIN') || 'https://<your_subdomain>.kinde.com';

        this.client = jwksClient({
            jwksUri: `${this.kindeDomain}/.well-known/jwks.json`,
            cache: true,
            rateLimit: true,
            jwksRequestsPerMinute: 5,
        });
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new UnauthorizedException('Missing or invalid Authorization header');
        }

        const token = authHeader.split(' ')[1];

        try {
            const decodedUser = await this.validateToken(token);
            // fetch user from database using PrismaService if needed
            const user = await this.prismaService.user.findUnique({
                where: { kindeId: decodedUser.sub },
            });

            if (!user) {
                throw new UnauthorizedException('User not found');
            }

            // console.log('Decoded Kinde user:', decodedUser);
            // console.log('User from database:', user);
            // if we have a user lets check if the kindeid and email match 
            if(user.isActive === false){
                throw new UnauthorizedException('User is not active');
            }
            // Attach the decoded Kinde user profile/token metadata to the request object
            request.user = {
                kindeId: decodedUser.sub,
                email: decodedUser?.email,
                roles: decodedUser?.roles || [],
                id : user.id
                // Add any other relevant Kinde user profile fields here
            };
            return true;
        } catch (error) {
            throw new UnauthorizedException('Invalid or expired Kinde token or user not found');
        }
    }

    private getKey(header: jwt.JwtHeader, callback: jwt.SigningKeyCallback) {
        this.client.getSigningKey(header.kid, (err, key) => {
            if (err) {
                return callback(err);
            }
            const signingKey = key?.getPublicKey();
            callback(null, signingKey);
        });
    }

    private validateToken(token: string): Promise<any> {
        return new Promise((resolve, reject) => {
            jwt.verify(
                token,
                this.getKey.bind(this),
                {
                    issuer: this.kindeDomain,
                    algorithms: ['RS256'],
                },
                (err, decoded) => {
                    if (err) return reject(err);
                    resolve(decoded);
                },
            );
        });
    }
}
