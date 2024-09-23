import { Test, TestingModule } from '@nestjs/testing';
import { TimingsController } from './timings.controller';
import { TimingsService } from './timings.service';

describe('TimingsController', () => {
  let controller: TimingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimingsController],
      providers: [TimingsService],
    }).compile();

    controller = module.get<TimingsController>(TimingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
