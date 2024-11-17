import TypeOrmConfig from 'src/common/config/type.orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { seeder } from 'nestjs-seeder';
import { ConcertModule } from 'src/domain/concert/concert.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from 'src/domain/user/user.module';
import { PointSeeder } from './seeder.point';
import { PointsModule } from 'src/domain/points/points.module';
import { ReservationModule } from 'src/domain/reservation/reservation.module';
import { UserSeeder } from './seeder.user';
import { ConcertSeeder } from './seeder.concert';
import { ReservationSeeder } from './seeder.reservation';

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
}).run([UserSeeder, ConcertSeeder, PointSeeder, ReservationSeeder]);
