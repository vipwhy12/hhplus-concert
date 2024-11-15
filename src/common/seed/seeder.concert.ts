import { ConfigService } from '@nestjs/config';
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
    private readonly configService: ConfigService,
  ) {}

  async seed() {
    const dataCount = this.configService.get<number>('SEED_DATA_COUNT');
    const seat = DataFactory.createForClass(SeatEntity).generate(dataCount);
    const concert =
      DataFactory.createForClass(ConcertEntity).generate(dataCount);
    const session =
      DataFactory.createForClass(ConcertSessionEntity).generate(dataCount);

    await this.concertRepository.insertConcert(concert);
    await this.concertRepository.insertSession(session);
    await this.concertRepository.insertSeat(seat);
  }

  drop() {
    return this.concertRepository.delete({});
  }
}
