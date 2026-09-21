import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config?: ConfigService) {
    const connectionString = config?.get<string>('DATABASE_URL');
    const adapter = new PrismaNeon({ connectionString: connectionString });

    super({ adapter });
  }
}
