import { IsNotEmpty, IsString } from 'class-validator';

export class ReserationSeatRequestDto {
  @IsNotEmpty()
  @IsString()
  sessionId: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  seatId: string;
}
