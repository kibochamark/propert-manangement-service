import { Module } from '@nestjs/common';
import { TenancyService } from './tenancy.service';
import { TenancyRepository } from './tenancy.repository';
import { TenancyController } from './tenancy.controller';
import { BalanceModule } from 'src/balance/balance.module';

@Module({
  imports: [BalanceModule],
  providers: [TenancyService, TenancyRepository],
  controllers: [TenancyController],
  exports: [TenancyService],
})
export class TenancyModule {}
