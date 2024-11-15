export const USER_REPOSITORY = Symbol('UserRepository');
export interface UserRepository {
  getUserById(id: number);
}
