import { ReservationState } from 'src/domain/reservation/constants/reservation.state';
import { ReservationEntity } from 'src/domain/reservation/entities/reservation.entity';
import { faker } from '@faker-js/faker';

export const FctoryReservationEntity = (): ReservationEntity => {
  const reservation = new ReservationEntity();

  reservation.userId = faker.string.uuid();
  reservation.seatId = faker.string.uuid();
  reservation.concertSessionId = faker.string.uuid();
  reservation.status = ReservationState.PENDING;
  return reservation;
};
