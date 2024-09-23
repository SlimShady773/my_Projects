import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TimingsService } from './timings.service';
import { Timing } from './entities/timing.entity';

@Controller('timings')
export class TimingsController {
  constructor(private readonly timingsService: TimingsService) {}

  @Post()
  create(@Body() timing: Timing): Promise<Timing> {
    return this.timingsService.create(timing);
  }

  @Get()
  findAll(): Promise<Timing[]> {
    return this.timingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Timing> {
    return this.timingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() timing: Timing): Promise<void> {
    return this.timingsService.update(+id, timing);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.timingsService.remove(+id);
  }
}
