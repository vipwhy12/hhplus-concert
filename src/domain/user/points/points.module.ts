import { Module } from '@nestjs/common';
import { PointsController } from './points.controller';
import { PointsService } from './points.service';
import { PointsRepositoryImple } from 'src/infrastructure/database/user/point/point.repository.imple';
import { PointEntity } from './entities/point.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PointEntity])],
  controllers: [PointsController],
  providers: [
    PointsService,
    {
      provide: 'POINTS_REPOSITORY',
      useClass: PointsRepositoryImple,
    },
  ],
  exports: [],
})
export class PointsModule {}
