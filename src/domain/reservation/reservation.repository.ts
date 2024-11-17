import { EntityManager } from 'typeorm';

export const RESERVATION_REPOSITORY = 'ReservationRepository';

export interface ReservationRepository {
  delete(arg0: {});
  insert(point: Record<string, import('nestjs-seeder').FactoryValue>[]);
  createReservation(
    sessionId: number,
    userId: number,
    seatId: number,
    price: number,
    manager?: EntityManager,
  ): unknown;
}
