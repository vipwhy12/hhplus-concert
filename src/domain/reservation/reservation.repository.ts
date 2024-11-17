import { EntityManager } from 'typeorm';

export const RESERVATION_REPOSITORY = 'ReservationRepository';

export interface ReservationRepository {
  createReservation(
    sessionId: string,
    userId: string,
    seatId: string,
    price: number,
    manager?: EntityManager,
  ): unknown;
}
