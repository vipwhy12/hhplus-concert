import { InjectRepository } from '@nestjs/typeorm';
import { ConcertRepository } from 'src/domain/concert/concert.repository';
import { ConcertEntity } from 'src/domain/concert/entities/concert.entity';
import { Repository } from 'typeorm';

export class ConcertRepositoryImpl implements ConcertRepository {
  constructor(
    @InjectRepository(ConcertEntity)
    private readonly concert: Repository<ConcertEntity>,
  ) {}

  async getConcerts(): Promise<ConcertEntity[]> {
    return this.concert.find();
  }
}
