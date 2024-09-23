import { Doctor } from 'src/doctors/entities/doctor.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('timings')
export class Timing {
  @PrimaryGeneratedColumn()
  timing_id: number;
  @Column()
  date: Date;
  @Column()
  start_time: string;
  @Column()
  end_time: string;
  @ManyToOne(() => Doctor, (doctor) => doctor.timeSlots)
  doctor: Doctor;
}
