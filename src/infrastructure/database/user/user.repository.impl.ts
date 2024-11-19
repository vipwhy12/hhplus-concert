import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from 'src/domain/user/entities/user.entity';
import { UserRepository } from 'src/domain/user/user.repository';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class UserRepositoryImple implements UserRepository {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly user: Repository<UsersEntity>,
  ) {}

  getUserById(id: string, manager: EntityManager) {
    const repository = manager ? manager.getRepository(UsersEntity) : this.user;

    return repository.findOne({ where: { id } });
  }
}
