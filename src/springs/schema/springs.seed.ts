import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';

import { SpringsService } from '../springs.service';
import { SpringComposition } from '../entities/spring.entity';

export const springs = [
    {
        name: 'evian',
        composition: null, 
        description: '', 
        brand: '', 
        price: null,
        localisation: null,
        startExploitationDate: null,
    },
    {
        name: 'volvic',
        composition: null,
        description: '', 
        brand: '', 
        price: null,
        localisation: null,
        startExploitationDate: null,
    },
];

@Injectable()
export class SpringsSeed {
  constructor(private readonly springsService: SpringsService) {}

  @Command({
    command: 'create:spring',
    describe: 'create a spring',
  })
  async create() {
    const created_srpings = springs.forEach(async (s) => {
      const created_spring =
        await this.springsService.create(s);
      console.log(`This ${created_spring} is created`);
    });
  }
}
