import { Test, TestingModule } from '@nestjs/testing';
import { RatingEngineController } from './rating_engine.controller';

describe('RatingEngineController', () => {
  let controller: RatingEngineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RatingEngineController],
    }).compile();

    controller = module.get<RatingEngineController>(RatingEngineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
