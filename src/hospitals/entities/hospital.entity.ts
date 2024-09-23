import { Doctor } from 'src/doctors/entities/doctor.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('hospitals')
export class Hospital {
  @PrimaryGeneratedColumn()
  hospital_id: number;
  @Column({ default: 'Apollo' })
  hospital_name: string;
  @Column({ default: 'bagal me hi' })
  clinic_location: string;
  @ManyToOne(() => Doctor, (doctor) => doctor.hospital)
  doctor: Doctor;
}
