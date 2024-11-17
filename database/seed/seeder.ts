import TypeOrmConfig from 'src/common/config/type.orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { seeder } from 'nestjs-seeder';
import { ConcertModule } from 'src/domain/concert/concert.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from 'src/domain/user/user.module';
import { PointsModule } from 'src/domain/points/points.module';
import { ReservationModule } from 'src/domain/reservation/reservation.module';
import { UsersEntity } from 'src/domain/user/entities/user.entity';
import { ReservationEntity } from 'src/domain/reservation/entities/reservation.entity';
import { PointSeeder } from './point/point.seeder';
import { PointEntity } from 'src/domain/points/entities/point.entity';
import { ConcertEntity } from 'src/domain/concert/entities/concert.entity';
import { ConcertSeeder } from './concert/concert.seeder';

seeder({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: false,
      load: [TypeOrmConfig],
    }),
    TypeOrmModule.forRootAsync(TypeOrmConfig.asProvider()),
    TypeOrmModule.forFeature([
      UsersEntity,
      ReservationEntity,
      PointEntity,
      ConcertEntity,
    ]),
    ConcertModule,
    UserModule,
    PointsModule,
    ReservationModule,
  ],
}).run([
  // UserSeeder,
  // ReservationSeeder,
  // PointSeeder,
  ConcertSeeder,
]);
