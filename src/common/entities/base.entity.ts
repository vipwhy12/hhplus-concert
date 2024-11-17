import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * 생성일 - 시, 분, 초가 포함된 `datetime` 형식
   */
  @CreateDateColumn({ type: 'datetime', comment: '생성일' })
  createAt: Date;

  /**
   * 수정일 - 시, 분, 초가 포함된 `datetime` 형식
   */
  @UpdateDateColumn({ type: 'datetime', comment: '수정일' })
  updatedAt: Date;
}
