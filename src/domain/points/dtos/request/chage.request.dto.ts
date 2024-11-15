import { IsNumber, Min } from 'class-validator';

export class CargeRequestDto {
  @IsNumber({}, { message: 'amount는 숫자여야 합니다.' })
  @Min(0, { message: 'amount는 0 이상이어야 합니다.' })
  balance: number;
}
