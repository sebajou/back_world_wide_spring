import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsOptional,
} from 'class-validator';
import {
  SpringComposition,
  SpringLocalisation,
  SpringPrice,
} from '../entities/spring.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSpringDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(42)
  @ApiProperty({ example: 'Coca Cola' })
  name: string;

  @IsOptional()
  @ApiProperty({ example: 'Coca Cola' })
  composition: SpringComposition[];

  @IsOptional()
  @IsString()
  @MaxLength(450)
  @ApiProperty({ example: 'to being fat and ill' })
  description: string;

  @IsOptional()
  @IsString()
  @MaxLength(42)
  @ApiProperty({ example: 'Coca Cola Company' })
  brand: string;

  @IsOptional()
  @ApiProperty({
    example: {
      price: 11.11,
      money: 'USD',
      by: 'Walmart',
      country: 'USA',
    },
  })
  price: SpringPrice[];

  @IsOptional()
  @ApiProperty({ example: { longitude: 11.11, latitude: 22.22 } })
  localisation: SpringLocalisation;

  @IsOptional()
  @ApiProperty({ example: '2024-01-01' })
  startExploitationDate: Date;
}
