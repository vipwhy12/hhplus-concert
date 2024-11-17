import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';
import {
  ReservationState,
  ReservationStateType,
} from './../constants/reservation.state';

@Entity('reservations')
export class ReservationEntity extends BaseEntity {
  @Column()
  userId: number;

  @Column()
  seatId: number;

  @Column()
  concertSessionId: number;

  @Column()
  status: ReservationStateType = ReservationState.PENDING;
}
