import { IsNumber, IsString } from 'class-validator';

export class CaptureReqDto {
  @IsString()
  userId: string;

  @IsString()
  reservationId: string;

  @IsNumber()
  amount: number;
}
