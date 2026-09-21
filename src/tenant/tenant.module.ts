import { Module } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { TenantRepository } from './tenant.repository';
import { TenantController } from './tenant.controller';

@Module({
  providers: [TenantService, TenantRepository],
  controllers: [TenantController],
  exports: [TenantService],
})
export class TenantModule {}
