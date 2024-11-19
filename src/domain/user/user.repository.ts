import { EntityManager } from 'typeorm';

export const USER_REPOSITORY = Symbol('UserRepository');

export interface UserRepository {
  getUserById(id: string, manager: EntityManager);
}
