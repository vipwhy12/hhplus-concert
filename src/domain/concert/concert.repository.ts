import { EntityManager } from 'typeorm';
import { ConcertEntity } from './entities/concert.entity';

export const CONCERT_REPOSITORY = Symbol('ConcertRepository');
export interface ConcertRepository {
  getSeatById(id: number, manager: EntityManager);

  updateSeatStatus(seatId: number, status: boolean, manager: EntityManager);

  getConcerts(): Promise<ConcertEntity[]>;

  getReservableConcertSession(concertId: number);

  insertConcert(
    concert: Record<string, import('nestjs-seeder').FactoryValue>[],
  );

  insertSession(
    session: Record<string, import('nestjs-seeder').FactoryValue>[],
  );

  insertSeat(seat: Record<string, import('nestjs-seeder').FactoryValue>[]);

  delete(arg0);
}
