import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class UsersEntity extends BaseEntity {
  @Column('varchar', { length: 255 })
  name: string;
}
