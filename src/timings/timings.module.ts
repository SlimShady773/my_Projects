import { Module } from '@nestjs/common';
import { TimingsService } from './timings.service';
import { TimingsController } from './timings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Timing } from './entities/timing.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Timing])],
  controllers: [TimingsController],
  providers: [TimingsService],
})
export class TimingsModule {}
