import { EntityManager } from 'typeorm';

export const POINTS_REPOSITORY = 'POINTS_REPOSITORY';
export interface PointsRepository {
  findByUserId(userId: string, manager?: EntityManager);

  update(userId: string, balance: number, manager?: EntityManager);
}
