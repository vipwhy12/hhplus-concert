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
    const dataCount = this.configService.get<number>('SEED_DATA_COUNT');
    const point = DataFactory.createForClass(PointEntity).generate(dataCount);

    await this.pointReservation.insert(point);
  }

  drop() {
    return this.pointReservation.delete({});
  }
}
