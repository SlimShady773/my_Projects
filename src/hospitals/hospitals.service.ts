import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hospital } from './entities/hospital.entity';

@Injectable()
export class HospitalsService {
  constructor(
    @InjectRepository(Hospital)
    private readonly hospitalsRepository: Repository<Hospital>,
  ) {}
  create(hospital: Hospital): Promise<Hospital> {
    return this.hospitalsRepository.save(hospital);
  }

  findAll(): Promise<Hospital[]> {
    return this.hospitalsRepository.find();
  }

  findOne(hospital_id: number): Promise<Hospital> {
    return this.hospitalsRepository.findOneBy({ hospital_id });
  }

  async update(hospital_id: number, hospital: Hospital): Promise<void> {
    await this.hospitalsRepository.update(hospital_id, hospital);
  }

  async remove(hospital_id: number): Promise<void> {
    await this.hospitalsRepository.delete({ hospital_id });
  }
}
