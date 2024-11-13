import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'concert' })
export class ConcertEntity extends BaseEntity {
  @Column()
  name: string;
}
