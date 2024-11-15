import { Factory } from 'nestjs-seeder';
import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'concert_sessions' })
export class ConcertSessionEntity extends BaseEntity {
  @Column()
  @Factory(() => {
    const start = new Date();
    start.setHours(start.getHours() + Math.floor(Math.random() * 48)); // 시작 시간: 현재 시간 이후 0~48시간 내
    return start;
  })
  startAt: Date;

  @Column()
  @Factory((entity: ConcertSessionEntity) => {
    // startAt 값이 없는 경우 기본값 설정
    const startAt = entity.startAt || new Date();
    const end = new Date(startAt);
    end.setHours(end.getHours() + 2); // 시작 시간 이후 2시간 후
    return end;
  })
  endAt: Date;

  @Column()
  @Factory(() => {
    const startReservation = new Date();
    startReservation.setDate(
      startReservation.getDate() - Math.floor(Math.random() * 30),
    ); // 예약 시작: 0~30일 전
    return startReservation;
  })
  startReservationAt: Date;

  @Column()
  @Factory(() => {
    const endReservation = new Date();
    endReservation.setDate(
      endReservation.getDate() + Math.floor(Math.random() * 7),
    ); // 예약 종료: 현재 시간 기준 0~7일 후
    return endReservation;
  })
  endReservationAt: Date;

  @Column()
  @Factory(() => 100)
  maxAudienceCount: number;

  @Column()
  @Factory(() => Math.ceil(Math.random() * 1000))
  concertId: number;
}
