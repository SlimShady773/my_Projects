import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Timing } from './entities/timing.entity';

@Injectable()
export class TimingsService {
  constructor(
    @InjectRepository(Timing)
    private readonly timingsRepository: Repository<Timing>,
  ) {}
  create(timing: Timing): Promise<Timing> {
    return this.timingsRepository.save(timing);
  }

  findAll(): Promise<Timing[]> {
    return this.timingsRepository.find();
  }

  findOne(timing_id: number): Promise<Timing> {
    return this.timingsRepository.findOneBy({ timing_id });
  }

  async update(timing_id: number, timing: Timing): Promise<void> {
    await this.timingsRepository.update(timing_id, timing);
  }

  async remove(timing_id: number): Promise<void> {
    await this.timingsRepository.delete({ timing_id });
  }
}
