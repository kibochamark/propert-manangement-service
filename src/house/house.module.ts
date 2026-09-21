import { Module } from '@nestjs/common';
import { HouseService } from './house.service';
import { HouseRepository } from './house.repository';
import { HouseController } from './house.controller';

@Module({
  providers: [HouseService, HouseRepository],
  controllers: [HouseController],
  exports: [HouseService],
})
export class HouseModule {}
