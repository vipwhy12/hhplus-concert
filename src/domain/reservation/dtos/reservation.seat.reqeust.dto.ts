import { IsNotEmpty, IsNumber } from 'class-validator';

export class ReserationSeatRequestDto {
  @IsNotEmpty()
  @IsNumber()
  sessionId: number;

  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  seatId: number;
}
