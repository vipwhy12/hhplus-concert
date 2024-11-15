import { BaseEntity, Column, Entity } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @Column('varchar', { length: 255 })
  name: string;
}
