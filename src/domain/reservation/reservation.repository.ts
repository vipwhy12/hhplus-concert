import { EntityManager } from 'typeorm';

export const RESERVATION_REPOSITORY = 'ReservationRepository';

export interface ReservationRepository {
  getReservationById(id: string, manager?: EntityManager);

  createReservation(
    sessionId: string,
    userId: string,
    seatId: string,
    price: number,
    manager?: EntityManager,
  );
}
