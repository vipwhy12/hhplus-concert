import { Module } from '@nestjs/common';
import { PointsController } from './points/points.controller';
import { PointsService } from './points/points.service';
import { PointsModule } from './points/points.module';

@Module({
  imports: [PointsModule],
  controllers: [PointsController],
  providers: [PointsService],
})
export class PaymentModule {}
