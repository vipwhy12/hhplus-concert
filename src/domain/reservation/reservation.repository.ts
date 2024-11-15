import { EntityManager } from 'typeorm';

export const RESERVATION_REPOSITORY = 'ReservationRepository';

export interface ReservationRepository {
  createReservation(
    sessionId: number,
    userId: number,
    seatId: number,
    price: number,
    manager?: EntityManager,
  ): unknown;
}
