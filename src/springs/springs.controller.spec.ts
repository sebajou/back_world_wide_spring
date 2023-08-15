import { Test, TestingModule } from '@nestjs/testing';
import { SpringsController } from './springs.controller';
import { SpringsService } from './springs.service';

describe('SpringsController', () => {
  let controller: SpringsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpringsController],
      providers: [SpringsService],
    }).compile();

    controller = module.get<SpringsController>(SpringsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
