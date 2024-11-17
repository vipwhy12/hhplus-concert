import TypeOrmConfig from 'src/common/config/type.orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { seeder } from 'nestjs-seeder';
import { ConfigModule } from '@nestjs/config';
import { UsersEntity } from 'src/domain/user/entities/user.entity';
import { ReservationEntity } from 'src/domain/reservation/entities/reservation.entity';
import { PointSeeder } from './point/point.seeder';
import { PointEntity } from 'src/domain/points/entities/point.entity';
import { ConcertEntity } from 'src/domain/concert/entities/concert.entity';
import { ConcertSeeder } from './concert/concert.seeder';
import { UserSeeder } from './user/user.seeder';
import { ReservationSeeder } from './reservation/reservation.seeder';

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
  ],
}).run([UserSeeder, ReservationSeeder, PointSeeder, ConcertSeeder]);
