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

  // async seed() {
  //   const dataCount = this.configService.get<number>('SEED_DATA_COUNT');
  //   const seat = DataFactory.createForClass(SeatEntity).generate(dataCount);
  //   const concert =
  //     DataFactory.createForClass(ConcertEntity).generate(dataCount);
  //   const session =
  //     DataFactory.createForClass(ConcertSessionEntity).generate(dataCount);

  //   await this.concertRepository.insertConcert(concert);
  //   await this.concertRepository.insertSession(session);
  //   await this.concertRepository.insertSeat(seat);
  // }

  async seed() {
    const dataCount = this.configService.get<number>('SEED_DATA_COUNT');
    const batchSize = 1000; // 한 번에 처리할 데이터 크기
    const totalBatches = Math.ceil(dataCount / batchSize); // 총 배치 수 계산

    console.log(
      `Starting seeding process with ${dataCount} items in ${totalBatches} batches.`,
    );

    for (let batchIndex = 0; batchIndex < totalBatches; batchIndex++) {
      const currentBatchSize = Math.min(
        batchSize,
        dataCount - batchIndex * batchSize,
      );

      // 배치 데이터 생성
      const seatBatch =
        DataFactory.createForClass(SeatEntity).generate(currentBatchSize);
      const concertBatch =
        DataFactory.createForClass(ConcertEntity).generate(currentBatchSize);
      const sessionBatch =
        DataFactory.createForClass(ConcertSessionEntity).generate(
          currentBatchSize,
        );

      // 데이터 삽입
      await this.concertRepository.insertConcert(concertBatch);
      await this.concertRepository.insertSession(sessionBatch);
      await this.concertRepository.insertSeat(seatBatch);

      console.log(`Batch ${batchIndex + 1}/${totalBatches} inserted`);
    }

    console.log('Seeding process completed.');
  }

  drop() {
    return this.concertRepository.delete({});
  }
}
