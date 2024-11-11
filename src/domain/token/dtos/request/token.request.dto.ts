import { IsNumber } from 'class-validator';

export class TokenRequestDto {
  @IsNumber()
  id: number;
}
