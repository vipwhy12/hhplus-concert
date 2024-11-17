import { faker } from '@faker-js/faker';
import { ConcertEntity } from 'src/domain/concert/entities/concert.entity';

export const FctoryConcertEntity = (): ConcertEntity => {
  const concert = new ConcertEntity();

  concert.name = faker.string.alpha(10);

  return concert;
};
