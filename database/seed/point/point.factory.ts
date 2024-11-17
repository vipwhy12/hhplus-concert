import { faker } from '@faker-js/faker';
import { PointEntity } from 'src/domain/points/entities/point.entity';

export const FctoryPointEntity = (): PointEntity => {
  const point = new PointEntity();

  point.balance = faker.number.int({ max: 10000000 });
  point.userId = faker.string.uuid();

  return point;
};
