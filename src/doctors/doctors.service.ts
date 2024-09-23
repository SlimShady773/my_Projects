import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from './entities/doctor.entity';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorsRepository: Repository<Doctor>,
  ) {}
  create(doctor: Doctor): Promise<Doctor> {
    return this.doctorsRepository.save(doctor);
  }

  findAll(): Promise<Doctor[]> {
    return this.doctorsRepository.find();
  }

  findOne(doctor_id: number): Promise<Doctor> {
    return this.doctorsRepository.findOneBy({ doctor_id });
  }

  async update(doctor_id: number, doctor: Doctor): Promise<void> {
    await this.doctorsRepository.update(doctor_id, doctor);
  }

  async remove(doctor_id: number) {
    await this.doctorsRepository.delete({ doctor_id });
  }
}
