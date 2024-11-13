import { IsNotEmpty } from 'class-validator';

export class ConcertFindResponseDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  constructor({ id, name }) {
    this.id = id;
    this.name = name;
  }
}
