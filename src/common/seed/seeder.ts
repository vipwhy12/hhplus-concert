import { TypeOrmModule } from '@nestjs/typeorm';
import { seeder } from 'nestjs-seeder';
import { ConcertModule } from 'src/domain/concert/concert.module';
import { ConcertEntity } from 'src/domain/concert/entities/concert.entity';
import { ConcertSeeder } from './seeder.concert';
import TypeOrmConfig from 'src/common/config/type.orm.config';
import { ConfigModule } from '@nestjs/config';
import { UserSeeder } from './seeder.user';
import { UserModule } from 'src/domain/user/user.module';

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
  ],
}).run([UserSeeder, ConcertSeeder]);
