import {
  CONCERT_REPOSITORY,
  ConcertRepository,
} from 'src/domain/concert/concert.repository';
import { Inject, Injectable } from '@nestjs/common';
import { DataFactory, Seeder } from 'nestjs-seeder';
import { ConcertEntity } from 'src/domain/concert/entities/concert.entity';

@Injectable()
export class ConcertSeeder implements Seeder {
  constructor(
    @Inject(CONCERT_REPOSITORY)
    private readonly concertRepository: ConcertRepository,
  ) {}

  seed() {
    const concert = DataFactory.createForClass(ConcertEntity).generate(100);
    return this.concertRepository.insert(concert);
  }

  drop() {
    return this.concertRepository.delete({});
  }
}
