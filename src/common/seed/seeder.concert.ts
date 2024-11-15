import {
  CONCERT_REPOSITORY,
  ConcertRepository,
} from 'src/domain/concert/concert.repository';
import { Inject, Injectable } from '@nestjs/common';
import { DataFactory, Seeder } from 'nestjs-seeder';
import { ConcertEntity } from 'src/domain/concert/entities/concert.entity';
import { ConcertSessionEntity } from 'src/domain/concert/entities/concert.session.entity';
import { SeatEntity } from 'src/domain/concert/entities/seat.entity';

@Injectable()
export class ConcertSeeder implements Seeder {
  constructor(
    @Inject(CONCERT_REPOSITORY)
    private readonly concertRepository: ConcertRepository,
  ) {}

  async seed() {
    const concert = DataFactory.createForClass(ConcertEntity).generate(100);
    const seat = DataFactory.createForClass(SeatEntity).generate(100);
    const session =
      DataFactory.createForClass(ConcertSessionEntity).generate(100);

    await this.concertRepository.insertConcert(concert);
    await this.concertRepository.insertSession(session);
    await this.concertRepository.insertSeat(seat);
  }

  drop() {
    return this.concertRepository.delete({});
  }
}
