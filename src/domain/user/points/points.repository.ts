export const POINTS_REPOSITORY = 'POINTS_REPOSITORY';
export interface PointsRepository {
  getMyPoint(userId: number);
}
