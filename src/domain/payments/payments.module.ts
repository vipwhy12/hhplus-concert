import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { PaymentsFacade } from './payments.facade';
import { PAYMENTS_REPOSITORY } from './payments.repository';
import { PaymentsRepositoryImpl } from 'src/infrastructure/database/payments/payments.repository.impl';
import { UserModule } from '../user/user.module';
import { PointsModule } from '../points/points.module';
import { ReservationModule } from '../reservation/reservation.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentEntity } from './entities/payment.entity';
import { TokenModule } from '../token/token.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PaymentEntity]),
    UserModule,
    PointsModule,
    ReservationModule,
    UserModule,
    TokenModule,
  ],
  controllers: [PaymentsController],
  providers: [
    PaymentsFacade,
    PaymentsService,
    {
      provide: PAYMENTS_REPOSITORY,
      useClass: PaymentsRepositoryImpl,
    },
  ],
})
export class PaymentsModule {}
