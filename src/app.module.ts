import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaServiceModule } from './prismaservice/prismaservice.module';
import { ConfigModule } from '@nestjs/config';
import { PropertyModule } from './property/property.module';
import { UsersModule } from './users/users.module';
import { HouseModule } from './house/house.module';
import { TenantModule } from './tenant/tenant.module';
import { TenancyModule } from './tenancy/tenancy.module';
import { BalanceModule } from './balance/balance.module';
import { ChargeModule } from './charge/charge.module';
import { RentModule } from './rent/rent.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    PrismaServiceModule,
    ScheduleModule.forRoot(), // required for the @Cron() rent-generation job
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PropertyModule,
    UsersModule,
    HouseModule,
    TenantModule,
    TenancyModule,
    BalanceModule,
    ChargeModule,
    RentModule,
    PaymentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
