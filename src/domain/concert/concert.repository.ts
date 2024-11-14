import { ConcertEntity } from './entities/concert.entity';

export const CONCERT_REPOSITORY = Symbol('ConcertRepository');
export interface ConcertRepository {
  getConcerts(): Promise<ConcertEntity[]>;
  getReservableConcertSession(concertId: number);

  insert(
    concert: Record<string, import('nestjs-seeder').FactoryValue>[],
  ): Promise<any>;

  delete(arg0): Promise<any>;
}
