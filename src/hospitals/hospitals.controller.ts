import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HospitalsService } from './hospitals.service';
import { Hospital } from './entities/hospital.entity';

@Controller('hospitals')
export class HospitalsController {
  constructor(private readonly hospitalsService: HospitalsService) {}

  @Post()
  create(@Body() hospital: Hospital): Promise<Hospital> {
    return this.hospitalsService.create(hospital);
  }

  @Get()
  findAll(): Promise<Hospital[]> {
    return this.hospitalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Hospital> {
    return this.hospitalsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() hospital: Hospital): Promise<void> {
    return this.hospitalsService.update(+id, hospital);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.hospitalsService.remove(+id);
  }
}
