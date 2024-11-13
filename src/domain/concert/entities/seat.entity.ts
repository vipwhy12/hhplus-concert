import { BaseEntity } from 'src/common/entities/base.entity';
import { Column } from 'typeorm';

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
  concertSessionId: number;
}
