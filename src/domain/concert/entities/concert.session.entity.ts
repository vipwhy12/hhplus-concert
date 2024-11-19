import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'concert_sessions' })
export class ConcertSessionEntity extends BaseEntity {
  @Column({
    type: 'datetime',
    comment: '콘서트 시작 시간',
  })
  startAt: Date;

  @Column({
    type: 'datetime',
    comment: '콘서트 마감 시간',
  })
  endAt: Date;

  @Column({
    type: 'datetime',
    comment: '콘서트 예약 가능 시간',
  })
  startReservationAt: Date;

  @Column({
    type: 'datetime',
    comment: '콘서트 예약 마감 시간',
  })
  endReservationAt: Date;

  @Column({
    type: 'int',
    comment: '최대 관객 수',
  })
  maxAudienceCount: number;

  @Column({
    length: 36,
    name: 'concert_id',
    comment: '최대 관객 수',
  })
  concertId: string;
}
