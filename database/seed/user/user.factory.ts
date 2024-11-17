import { UsersEntity } from 'src/domain/user/entities/user.entity';
import { faker } from '@faker-js/faker';

export const FctoryUserEntity = (): UsersEntity => {
  const user = new UsersEntity();

  user.name = faker.person.firstName();

  return user;
};
