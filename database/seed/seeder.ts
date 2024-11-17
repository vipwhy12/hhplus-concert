import TypeOrmConfig from 'src/common/config/type.orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { seeder } from 'nestjs-seeder';
import { ConcertModule } from 'src/domain/concert/concert.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from 'src/domain/user/user.module';
import { PointsModule } from 'src/domain/points/points.module';
import { ReservationModule } from 'src/domain/reservation/reservation.module';
import { UserSeeder } from './user/seeder.user';
import { ConcertSeeder } from './concert/seeder.concert';
import { ConcertSessionSeeder } from './concert/seeder.concert.session';
import { PointSeeder } from './point/seeder.point';
import { ReservationSeeder } from './reservation/seeder.reservation';

seeder({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: false,
      load: [TypeOrmConfig],
    }),
    TypeOrmModule.forRootAsync(TypeOrmConfig.asProvider()),
    ConcertModule,
    UserModule,
    PointsModule,
    ReservationModule,
  ],
}).run([
  UserSeeder,
  ConcertSeeder,
  ConcertSessionSeeder,
  PointSeeder,
  ReservationSeeder,
]);
