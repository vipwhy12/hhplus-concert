import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class UsersEntity extends BaseEntity {
  @Column({
    length: 255,
    comment: '사용자 이름',
  })
  name: string;
}
