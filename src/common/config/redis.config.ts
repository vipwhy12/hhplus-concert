import { RedisModuleOptions } from '@liaoliaots/nestjs-redis';
import { registerAs } from '@nestjs/config';

export default registerAs(
  'redis',
  (): RedisModuleOptions => ({
    readyLog: true,
    config: {
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT, 10) || 6379,
      password: process.env.REDIS_PASSWORD,
    },
  }),
);
