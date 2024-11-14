import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConcertRepository } from 'src/domain/concert/concert.repository';
import { ConcertEntity } from 'src/domain/concert/entities/concert.entity';
import { ConcertSessionEntity } from 'src/domain/concert/entities/concert.session.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConcertRepositoryImpl implements ConcertRepository {
  constructor(
    @InjectRepository(ConcertEntity)
    private readonly concert: Repository<ConcertEntity>,
    @InjectRepository(ConcertSessionEntity)
    private readonly concertSessions: Repository<ConcertSessionEntity>,
  ) {}

  insert(
    concert: Record<string, import('nestjs-seeder').FactoryValue>[],
  ): Promise<any> {
    return this.concert.save(concert);
  }

  delete(arg0: any): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async getConcerts(): Promise<ConcertEntity[]> {
    return this.concert.find();
  }

  async getReservableConcertSession(concertId: number) {
    return this.concertSessions.find({
      where: { concertId },
    });
  }
}
