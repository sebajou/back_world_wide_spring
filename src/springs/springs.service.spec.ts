import { Test, TestingModule } from '@nestjs/testing';
import { SpringsService } from './springs.service';

describe('SpringsService', () => {
  let service: SpringsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpringsService],
    }).compile();

    service = module.get<SpringsService>(SpringsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
