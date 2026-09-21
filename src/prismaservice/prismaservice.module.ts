import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prismaservice.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaServiceModule {}
