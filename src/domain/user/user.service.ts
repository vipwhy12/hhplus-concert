import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY, UserRepository } from './user.repository';
import { EntityManager } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
  ) {}

  async getUserById(id: string, mananger?: EntityManager) {
    return await this.userRepository.getUserById(id, mananger);
  }
}
