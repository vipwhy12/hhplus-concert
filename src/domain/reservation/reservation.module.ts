import { Module } from '@nestjs/common';
import { RESERVATION_REPOSITORY } from './reservation.repository';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';
import { ReservationRepositoryImpl } from 'src/infrastructure/database/reservation/reservation.repository.impl';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationEntity } from './entities/reservation.entity';
import { ConcertModule } from '../concert/concert.module';
import { ReservationFacade } from './reservation.facade';

@Module({
  imports: [TypeOrmModule.forFeature([ReservationEntity]), ConcertModule],
  controllers: [ReservationController],
  providers: [
    ReservationFacade,
    ReservationService,
    {
      provide: RESERVATION_REPOSITORY,
      useClass: ReservationRepositoryImpl,
    },
  ],
  exports: [RESERVATION_REPOSITORY],
})
export class ReservationModule {}
