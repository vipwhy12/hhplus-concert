import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConcertRepository } from 'src/domain/concert/concert.repository';
import { ConcertEntity } from 'src/domain/concert/entities/concert.entity';
import { ConcertSessionEntity } from 'src/domain/concert/entities/concert.session.entity';
import { SeatEntity } from 'src/domain/concert/entities/seat.entity';
import {
  EntityManager,
  LessThanOrEqual,
  MoreThanOrEqual,
  Repository,
} from 'typeorm';

@Injectable()
export class ConcertRepositoryImpl implements ConcertRepository {
  constructor(
    @InjectRepository(ConcertEntity)
    private readonly concert: Repository<ConcertEntity>,
    @InjectRepository(ConcertSessionEntity)
    private readonly concertSessions: Repository<ConcertSessionEntity>,
    @InjectRepository(SeatEntity)
    private readonly seat: Repository<SeatEntity>,
  ) {}

  getSeatById(id: string, manager?: EntityManager) {
    const sessionRepository = manager
      ? manager.getRepository(SeatEntity)
      : this.seat;

    return sessionRepository.findOne({
      where: { id },
    });
  }

  updateSeatStatus(id: string, isReserved: boolean, manager: EntityManager) {
    const sessionRepository = manager
      ? manager.getRepository(SeatEntity)
      : this.seat;

    return sessionRepository.update({ id }, { isReserved });
  }

  async getConcerts(): Promise<ConcertEntity[]> {
    return this.concert.find();
  }

  async getReservableConcertSession(concertId: string) {
    const now = new Date();
    return this.concertSessions.find({
      where: {
        concertId,
        startReservationAt: LessThanOrEqual(now),
        endReservationAt: MoreThanOrEqual(now),
      },
    });
  }

  /*
    Dummy Data
  */

  insertConcert(
    concert: Record<string, import('nestjs-seeder').FactoryValue>[],
  ): Promise<any> {
    return this.concert.save(concert);
  }

  insertSession(
    session: Record<string, import('nestjs-seeder').FactoryValue>[],
  ): Promise<any> {
    return this.concertSessions.save(session);
  }

  insertSeat(
    seat: Record<string, import('nestjs-seeder').FactoryValue>[],
  ): Promise<any> {
    return this.seat.save(seat);
  }

  delete(arg0: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
