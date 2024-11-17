import { ConfigService } from '@nestjs/config';

import { Inject, Injectable } from '@nestjs/common';
import { DataFactory, Seeder } from 'nestjs-seeder';
import {
  RESERVATION_REPOSITORY,
  ReservationRepository,
} from 'src/domain/reservation/reservation.repository';
import { ReservationEntity } from 'src/domain/reservation/entities/reservation.entity';

@Injectable()
export class ReservationSeeder implements Seeder {
  constructor(
    @Inject(RESERVATION_REPOSITORY)
    private readonly reservationRepository: ReservationRepository,
    private readonly configService: ConfigService,
  ) {}

  async seed() {
    const dataCount = this.configService.get<number>('SEED_DATA_COUNT');
    const point =
      DataFactory.createForClass(ReservationEntity).generate(dataCount);

    await this.reservationRepository.insert(point);
  }

  drop() {
    return this.reservationRepository.delete({});
  }
}
