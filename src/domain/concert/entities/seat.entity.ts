import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'seats' })
export class SeatEntity extends BaseEntity {
  @Column({ default: false })
  isReserved: boolean;

  @Column()
  seatArea: string;

  @Column()
  seatNumber: number;

  @Column()
  seatPrice: number;

  @Column()
  concertSessionId: string;
}
