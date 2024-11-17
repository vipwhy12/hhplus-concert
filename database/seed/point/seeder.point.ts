import { ConfigService } from '@nestjs/config';

import { Inject, Injectable } from '@nestjs/common';
import { DataFactory, Seeder } from 'nestjs-seeder';
import {
  POINTS_REPOSITORY,
  PointsRepository,
} from 'src/domain/points/points.repository';
import { PointEntity } from 'src/domain/points/entities/point.entity';

@Injectable()
export class PointSeeder implements Seeder {
  constructor(
    @Inject(POINTS_REPOSITORY)
    private readonly pointReservation: PointsRepository,
    private readonly configService: ConfigService,
  ) {}

  async seed() {
    const totalCount = this.configService.get<number>('SEED_DATA_COUNT'); // 총 데이터 개수
    const batchSize = 1000; // 한 번에 처리할 데이터 개수
    const totalBatches = Math.ceil(totalCount / batchSize); // 필요한 배치 수 계산

    for (let batchIndex = 0; batchIndex < totalBatches; batchIndex++) {
      // 현재 배치에 포함될 데이터 개수 계산
      const currentBatchSize = Math.min(
        batchSize,
        totalCount - batchIndex * batchSize,
      );

      // 현재 배치 데이터 생성
      const batchData =
        DataFactory.createForClass(PointEntity).generate(currentBatchSize);

      // 데이터 삽입
      await this.pointReservation.insert(batchData);
      console.log(`Batch ${batchIndex + 1}/${totalBatches} inserted`);
    }
  }

  drop() {
    return this.pointReservation.delete({});
  }
}
