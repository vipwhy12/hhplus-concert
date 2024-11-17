import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from 'src/domain/user/entities/user.entity';
import { UserRepository } from 'src/domain/user/user.repository';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepositoryImple implements UserRepository {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly user: Repository<UsersEntity>,
  ) {}

  getUserById(id: string) {
    return this.user.find({ where: { id } });
  }
}
