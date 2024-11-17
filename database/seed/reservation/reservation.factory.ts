import { ReservationState } from 'src/domain/reservation/constants/reservation.state';
import { ReservationEntity } from 'src/domain/reservation/entities/reservation.entity';
import { faker } from '@faker-js/faker';

export const FctoryReservationEntity = (): ReservationEntity => {
  const reservation = new ReservationEntity();

  reservation.userId = faker.number.int({ min: 10, max: 100 });
  reservation.seatId = faker.number.int({ min: 10, max: 100 });
  reservation.concertSessionId = faker.number.int({ min: 10, max: 100 });
  reservation.status = ReservationState.PENDING;

  return reservation;
};
