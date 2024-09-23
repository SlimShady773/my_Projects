import { Hospital } from 'src/hospitals/entities/hospital.entity';
import { Timing } from 'src/timings/entities/timing.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('doctors')
export class Doctor {
  @PrimaryGeneratedColumn()
  doctor_id: number;
  @Column()
  name: string;
  @Column()
  specialty: string;
  @Column()
  email: string;
  @Column()
  phone: string;
  @OneToMany(() => Timing, (timeSlot) => timeSlot.doctor, { cascade: true })
  timeSlots: Timing[];
  @OneToMany(() => Hospital, (hospital) => hospital.doctor, { cascade: true })
  hospital: Hospital[];
}
