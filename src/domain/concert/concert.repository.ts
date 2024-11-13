import { ConcertEntity } from './entities/concert.entity';

export const CONCERT_REPOSITORY = Symbol('CONCERT_REPOSITORY');
export interface ConcertRepository {
  getConcerts(): Promise<ConcertEntity[]>;
}
