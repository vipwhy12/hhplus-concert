import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('points')
export class PointEntity extends BaseEntity {
  @Column({
    type: 'int',
    default: 0,
    comment: '포인트 잔액',
  })
  balance: number;

  @Column({
    length: 36,
    name: 'user_id',
    comment: '사용자 식별자',
  })
  userId: string;
}
