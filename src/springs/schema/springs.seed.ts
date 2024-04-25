import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';

import { SpringsService } from '../springs.service';
import { SpringComposition, SpringEntity } from '../entities/spring.entity';

export const springs: SpringEntity[] = [
  {
    name: 'evian',
    composition: [
      { elementName: 'Calcium', formula: 'Ca', quantity: 80, unity: 'mg/L' },
      { elementName: 'Magnesium', formula: 'Mg', quantity: 26, unity: 'mg/l' },
      { elementName: 'Potassium', formula: 'Po', quantity: 1, unity: 'mg/L' },
      { elementName: 'Sodium', formula: 'So', quantity: 6.5, unity: 'mg/L' },
      { elementName: 'Nitrates', formula: 'Ni', quantity: 3.8, unity: 'mg/L' },
      {
        elementName: 'Bicarbonates',
        formula: '',
        quantity: 360,
        unity: 'mg/L',
      },
      { elementName: 'Sulfates', formula: '', quantity: 15, unity: 'mg/L' },
      { elementName: 'Silica', formula: '', quantity: 14, unity: 'mg/L' },
      { elementName: 'Chlorides', formula: '', quantity: 10, unity: 'mg/L' },
      {
        elementName: 'Dissolved solids',
        formula: '',
        quantity: 345,
        unity: 'ppm',
      },
      { elementName: 'pH', formula: '', quantity: 7.2, unity: 'pH' },
    ],
    description: '15-year natural filtration process. ',
    brand: 'Evian',
    price: [
      { price: 139.97, money: 'US Dollar', by: '3x500mL', country: 'USA' },
      { price: 3.66, money: 'Euro', by: '6x1.5L', country: 'France' },
    ],
    localisation: { longitude: 46.399764, latitude: 6.591661 },
    startExploitationDate: new Date(1826, 1, 1),
  },
  {
    name: 'volvic',
    composition: [
      { elementName: 'Calcium', formula: 'Ca', quantity: 12, unity: 'mg/L' },
      { elementName: 'Magnesium', formula: 'Mg', quantity: 8, unity: 'mg/l' },
      { elementName: 'Potassium', formula: 'Po', quantity: 6, unity: 'mg/L' },
      { elementName: 'Sodium', formula: 'So', quantity: 12, unity: 'mg/L' },
      { elementName: 'Nitrates', formula: 'Ni', quantity: 7.3, unity: 'mg/L' },
      { elementName: 'Bicarbonates', formula: '', quantity: 74, unity: 'mg/L' },
      { elementName: 'Sulfates', formula: '', quantity: 9, unity: 'mg/L' },
      { elementName: 'Silica', formula: 'Si', quantity: 32, unity: 'mg/L' },
      { elementName: 'Chlorides', formula: '', quantity: 15, unity: 'mg/L' },
      {
        elementName: 'Dissolved solids',
        formula: '',
        quantity: 130,
        unity: 'ppm',
      },
      { elementName: 'pH', formula: '', quantity: 7, unity: 'pH' },
    ],
    description:
      'L impluvium de Volvic se compose de couches de roches volcanique',
    brand: 'L eau de Volvic',
    price: [
      { price: 15.99, money: 'US Dollar', by: '1L', country: 'USA' },
      { price: 2.4, money: 'Euro', by: '6x0.5L', country: 'France' },
    ],
    localisation: { longitude: 45.886365, latitude: 3.060074 },
    startExploitationDate: new Date(1938, 1, 1),
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
      const created_spring = await this.springsService.create(s);
      console.log(`This ${created_spring} is created`);
    });
  }
}
