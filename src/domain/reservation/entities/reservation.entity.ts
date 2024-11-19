import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';
import {
  ReservationState,
  ReservationStateType,
} from './../constants/reservation.state';

@Entity('reservations')
export class ReservationEntity extends BaseEntity {
  @Column({
    length: 36,
    name: 'user_id',
    comment: '사용자 식별자',
  })
  userId: string;

  @Column({
    length: 36,
    name: 'seat_id',
    comment: '좌석 식별자',
  })
  seatId: string;

  @Column({
    length: 36,
    name: 'concert_session_id',
    comment: '콘서트 세션 식별자',
  })
  concertSessionId: string;

  @Column({
    default: ReservationState.PENDING,
    comment: '예약 상태',
  })
  status: ReservationStateType = ReservationState.PENDING;
}
