import { Module } from '@nestjs/common';
import { TenancyService } from './tenancy.service';
import { TenancyRepository } from './tenancy.repository';
import { TenancyController } from './tenancy.controller';

@Module({
  providers: [TenancyService, TenancyRepository],
  controllers: [TenancyController],
  exports: [TenancyService],
})
export class TenancyModule {}
