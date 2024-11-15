import { Factory } from 'nestjs-seeder';
import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class UsersEntity extends BaseEntity {
  @Column('varchar', { length: 255 })
  @Factory((faker) => faker.lorem.words(3))
  name: string;
}
