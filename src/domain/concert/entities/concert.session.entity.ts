import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'concert_sessions' })
export class ConcertSessionEntity extends BaseEntity {
  @Column()
  startAt: Date;

  @Column()
  endAt: Date;

  @Column()
  startReservationAt: Date;

  @Column()
  endReservationAt: Date;

  @Column()
  maxAudienceCount: number;

  @Column()
  concertId: number;
}
