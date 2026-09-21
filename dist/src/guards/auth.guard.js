"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KindeAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt = __importStar(require("jsonwebtoken"));
const jwks_rsa_1 = __importDefault(require("jwks-rsa"));
const config_1 = require("@nestjs/config");
const prismaservice_service_1 = require("../prismaservice/prismaservice.service");
let KindeAuthGuard = class KindeAuthGuard {
    configService;
    prismaService;
    client;
    kindeDomain;
    constructor(configService, prismaService) {
        this.configService = configService;
        this.prismaService = prismaService;
        this.kindeDomain = this.configService.get('KINDE_DOMAIN') || 'https://<your_subdomain>.kinde.com';
        this.client = (0, jwks_rsa_1.default)({
            jwksUri: `${this.kindeDomain}/.well-known/jwks.json`,
            cache: true,
            rateLimit: true,
            jwksRequestsPerMinute: 5,
        });
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new common_1.UnauthorizedException('Missing or invalid Authorization header');
        }
        const token = authHeader.split(' ')[1];
        try {
            const decodedUser = await this.validateToken(token);
            const user = await this.prismaService.user.findUnique({
                where: { kindeId: decodedUser.sub },
            });
            if (!user) {
                throw new common_1.UnauthorizedException('User not found');
            }
            if (user.isActive === false) {
                throw new common_1.UnauthorizedException('User is not active');
            }
            request.user = {
                kindeId: decodedUser.sub,
                email: decodedUser?.email,
                roles: decodedUser?.roles || [],
                id: user.id
            };
            return true;
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Invalid or expired Kinde token or user not found');
        }
    }
    getKey(header, callback) {
        this.client.getSigningKey(header.kid, (err, key) => {
            if (err) {
                return callback(err);
            }
            const signingKey = key?.getPublicKey();
            callback(null, signingKey);
        });
    }
    validateToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, this.getKey.bind(this), {
                issuer: this.kindeDomain,
                algorithms: ['RS256'],
            }, (err, decoded) => {
                if (err)
                    return reject(err);
                resolve(decoded);
            });
        });
    }
};
exports.KindeAuthGuard = KindeAuthGuard;
exports.KindeAuthGuard = KindeAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService, prismaservice_service_1.PrismaService])
], KindeAuthGuard);
//# sourceMappingURL=auth.guard.js.map