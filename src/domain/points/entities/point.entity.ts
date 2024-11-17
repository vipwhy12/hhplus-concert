import { Factory } from 'nestjs-seeder';
import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

const userIdSet = new Set<number>();

@Entity('points')
export class PointEntity extends BaseEntity {
  @Column({ type: 'int', default: 0 })
  @Factory(() => Math.floor(Math.random() * 10000)) // 랜덤 잔액 (0~9999)
  balance: number;

  @Column({ type: 'int', nullable: false })
  @Factory(() => {
    let id;
    do {
      id = Math.floor(Math.random() * 100000000); // 랜덤 ID 생성
    } while (userIdSet.has(id)); // 중복 여부 확인
    userIdSet.add(id); // 고유 값으로 추가
    return id;
  })
  userId: number;
}
