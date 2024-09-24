import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  room: string;

  @Column()
  username: string;

  @Column('text')
  message: string;

  @CreateDateColumn()
  createdAt: Date;
}
