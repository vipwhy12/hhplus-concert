import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';
import {
  ReservationState,
  ReservationStateType,
} from './../constants/reservation.state';
import { Factory } from 'nestjs-seeder';

const userIdSet = new Set<number>();

@Entity('reservations')
export class ReservationEntity extends BaseEntity {
  @Column()
  @Factory(() => {
    let id;
    do {
      id = Math.floor(Math.random() * 10000); // 랜덤 ID 생성
    } while (userIdSet.has(id)); // 중복 여부 확인
    userIdSet.add(id); // 고유 값으로 추가
    return id;
  })
  userId: number;

  @Column()
  @Factory(() => {
    let id;
    do {
      id = Math.floor(Math.random() * 10000); // 랜덤 ID 생성
    } while (userIdSet.has(id)); // 중복 여부 확인
    userIdSet.add(id); // 고유 값으로 추가
    return id;
  })
  seatId: number;

  @Column()
  @Factory(() => {
    let id;
    do {
      id = Math.floor(Math.random() * 10000); // 랜덤 ID 생성
    } while (userIdSet.has(id)); // 중복 여부 확인
    userIdSet.add(id); // 고유 값으로 추가
    return id;
  })
  concertSessionId: number;

  @Column()
  @Factory(() => ReservationState.PENDING)
  status: ReservationStateType = ReservationState.PENDING;
}
