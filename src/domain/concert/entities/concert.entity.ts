import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('concerts')
export class ConcertEntity extends BaseEntity {
  @Column({
    length: 255,
    comment: '콘서트 이름',
  })
  name: string;
}
