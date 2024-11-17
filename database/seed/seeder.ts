import TypeOrmConfig from 'src/common/config/type.orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { seeder } from 'nestjs-seeder';
import { ConcertModule } from 'src/domain/concert/concert.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from 'src/domain/user/user.module';
import { PointsModule } from 'src/domain/points/points.module';
import { ReservationModule } from 'src/domain/reservation/reservation.module';
import { ConcertSeeder } from './concert/seeder.concert';
import { ConcertSessionSeeder } from './concert/seeder.concert.session';
import { PointSeeder } from './point/seeder.point';
import { ReservationSeeder } from './reservation/seeder.reservation';
import { UserSeeder } from './user/user.seeder';
import { UsersEntity } from 'src/domain/user/entities/user.entity';

seeder({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: false,
      load: [TypeOrmConfig],
    }),
    TypeOrmModule.forRootAsync(TypeOrmConfig.asProvider()),
    TypeOrmModule.forFeature([UsersEntity]),
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
