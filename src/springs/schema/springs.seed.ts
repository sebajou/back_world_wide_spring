import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';

import { SpringsService } from '../springs.service';

export const springs = [
    {
        name: 'evian',
    },
    {
        name: 'volvic',
    },
];

@Injectable()
export class SpringSeed {
  constructor(private readonly springsService: SpringsService) {}

  @Command({
    command: 'create:spring',
    describe: 'create a spring',
  })
  async create() {
    springs.forEach(async (e) => {
      const created_spring =
        await this.springsService.create(e);
      console.log(`This ${created_spring} is created`);
    });
  }
}
