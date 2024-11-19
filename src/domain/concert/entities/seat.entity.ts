import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('seats')
export class SeatEntity extends BaseEntity {
  @Column({
    default: false,
    comment: '예약 상태',
  })
  isReserved: boolean;

  @Column({
    length: 255,
    comment: '좌석 구역',
  })
  seatArea: string;

  @Column({
    comment: '좌석 번호',
    name: 'seat_number',
  })
  seatNumber: number;

  @Column({
    type: 'bigint',
    comment: '좌석 가격',
  })
  seatPrice: number;

  @Column({
    length: 36,
    name: 'concert_session_id',
    comment: '콘서트 세션 식별자',
  })
  concertSessionId: string;
}
