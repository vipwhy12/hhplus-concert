import { EntityManager } from 'typeorm';

export const POINTS_REPOSITORY = 'POINTS_REPOSITORY';
export interface PointsRepository {
  findByUserId(userId: number, manager?: EntityManager);

  update(userId: number, balance: number, manager?: EntityManager);
}
