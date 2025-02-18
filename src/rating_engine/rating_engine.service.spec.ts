import { Test, TestingModule } from '@nestjs/testing';
import { RatingEngineService } from './rating_engine.service';

describe('RatingEngineService', () => {
  let service: RatingEngineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RatingEngineService],
    }).compile();

    service = module.get<RatingEngineService>(RatingEngineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
