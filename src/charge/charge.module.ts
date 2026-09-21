import { Module } from '@nestjs/common';
import { ChargeService } from './charge.service';
import { ChargeRepository } from './charge.repository';
import { ChargeController } from './charge.controller';

@Module({
  providers: [ChargeService, ChargeRepository],
  controllers: [ChargeController],
  exports: [ChargeService],
})
export class ChargeModule {}
