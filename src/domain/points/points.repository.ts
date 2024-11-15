import { EntityManager } from 'typeorm';

export const POINTS_REPOSITORY = 'POINTS_REPOSITORY';
export interface PointsRepository {
  insert(user: Record<string, import('nestjs-seeder').FactoryValue>[]): unknown;
  findByUserId(userId: number, manager?: EntityManager);

  update(userId: number, balance: number, manager?: EntityManager);

  delete(arg0: {});
}
