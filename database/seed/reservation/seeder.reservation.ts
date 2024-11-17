import { BaseSeeder } from '../base.seeder';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReservationEntity } from 'src/domain/reservation/entities/reservation.entity';
import { FctoryReservationEntity } from './reservation.factory';

@Injectable()
export class ReservationSeeder extends BaseSeeder<ReservationEntity> {
  constructor(
    @InjectRepository(ReservationEntity)
    reservationRepository: Repository<ReservationEntity>,
    configService: ConfigService,
  ) {
    super(reservationRepository, configService, FctoryReservationEntity);
  }
}
