export const USER_REPOSITORY = Symbol('UserRepository');

export interface UserRepository {
  insert(user: Record<string, import('nestjs-seeder').FactoryValue>[]);
  delete(arg0: {});
  getUserById(id: number);
}
