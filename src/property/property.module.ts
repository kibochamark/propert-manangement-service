import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyRepository } from './property.repository';
import { PropertyController } from './property.controller';

@Module({
  providers: [PropertyService, PropertyRepository],
  exports: [PropertyService],
  controllers: [PropertyController],
})
export class PropertyModule {}
