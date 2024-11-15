import { TypeOrmModule } from '@nestjs/typeorm';
import { seeder } from 'nestjs-seeder';
import { ConcertModule } from 'src/domain/concert/concert.module';
import { ConcertSeeder } from './seeder.concert';
import TypeOrmConfig from 'src/common/config/type.orm.config';
import { ConfigModule } from '@nestjs/config';
import { UserSeeder } from './seeder.user';
import { UserModule } from 'src/domain/user/user.module';
import { PointSeeder } from './seeder.point';
import { PointsModule } from 'src/domain/points/points.module';

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
  ],
}).run([PointSeeder]);

// }).run([UserSeeder, ConcertSeeder]);
