import { ConcertService } from './concert.service';
import { ConcertEntity } from './entities/concert.entity';
import { ConcertController } from './concert.controller';
import { CONCERT_REPOSITORY } from './concert.repository';
import { Module } from '@nestjs/common';
import { SeatEntity } from './entities/seat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConcertRepositoryImpl } from 'src/infrastructure/database/concert/concert.repository.impl';
import { ConcertSessionEntity } from './entities/concert.session.entity';

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
