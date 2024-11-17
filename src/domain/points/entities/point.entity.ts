import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('points')
export class PointEntity extends BaseEntity {
  @Column({ type: 'int', default: 0 })
  balance: number;

  @Column({ type: 'varchar', nullable: false })
  userId: string;
}
