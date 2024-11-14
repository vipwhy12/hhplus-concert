import { ConcertService } from './concert.service';
import { ConcertEntity } from './entities/concert.entity';
import { ConcertController } from './concert.controller';
import { ConcertSessionEntity } from './entities/concert.session.entity';
import { CONCERT_REPOSITORY } from './concert.repository';
import { ConcertRepositoryImpl } from 'src/infrastructure/concert/concert.repository.impl';
import { Module } from '@nestjs/common';
import { SeatEntity } from './entities/seat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([ConcertEntity, ConcertSessionEntity, SeatEntity]),
  ],
  providers: [
    ConcertService,
    {
      provide: CONCERT_REPOSITORY,
      useClass: ConcertRepositoryImpl,
    },
  ],
  controllers: [ConcertController],
  exports: [CONCERT_REPOSITORY],
})
export class ConcertModule {}
