import { Module } from '@nestjs/common';
import { SettlementService } from './settlement.service';
import { SettlementRepository } from './settlement.repository';
import { SettlementController } from './settlement.controller';
import { BalanceModule } from 'src/balance/balance.module';

@Module({
  imports: [BalanceModule],
  providers: [SettlementService, SettlementRepository],
  controllers: [SettlementController],
  exports: [SettlementService], // TenancyService needs buildPreview() + applyLeftoverCredit()
})
export class SettlementModule {}
