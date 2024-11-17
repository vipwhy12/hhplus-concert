import { Module } from '@nestjs/common';
import { TokenModule } from './token/token.module';
import { ConcertModule } from './concert/concert.module';
import { UserModule } from './user/user.module';
import { ReservationModule } from './reservation/reservation.module';
import { PointsModule } from './points/points.module';

@Module({
  imports: [
    TokenModule,
    ConcertModule,
    UserModule,
    ReservationModule,
    PointsModule,
  ],
})
export class DomainModule {}
