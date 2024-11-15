import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { registerAs } from '@nestjs/config';
import { join } from 'path';

export default registerAs('database', (): TypeOrmModuleOptions => {
  const __basedir = join(__dirname, '../../');
  const entitiesPath = __basedir + '/domain/*/entities/*.entity{.ts,.js}';

  return {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: true,
    charset: 'utf8mb4',
    entities: [entitiesPath],
    extra: {
      connectionLimit: 50, // 연결 풀 크기를 적절히 설정
    },
    // synchronize: true,
  };
});
