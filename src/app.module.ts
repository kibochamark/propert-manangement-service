import { Module } from '@nestjs/common';
import { PrismaServiceModule } from './prismaservice/prismaservice.module';
import { ConfigModule } from '@nestjs/config';
import { PropertyModule } from './property/property.module';
import { UsersModule } from './users/users.module';
import { HouseModule } from './house/house.module';
import { TenantModule } from './tenant/tenant.module';
import { TenancyModule } from './tenancy/tenancy.module';

@Module({
  imports: [PrismaServiceModule, ConfigModule.forRoot({
    isGlobal: true,
  }), PropertyModule, UsersModule, HouseModule, TenantModule, TenancyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
