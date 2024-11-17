import { EntityManager } from 'typeorm';
import { ConcertEntity } from './entities/concert.entity';

export const CONCERT_REPOSITORY = Symbol('ConcertRepository');
export interface ConcertRepository {
  getSeatById(id: string, manager: EntityManager);

  updateSeatStatus(seatId: string, status: boolean, manager: EntityManager);

  getConcerts(): Promise<ConcertEntity[]>;

  getReservableConcertSession(concertId: string);
}
