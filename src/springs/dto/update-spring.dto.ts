import { PartialType } from '@nestjs/mapped-types';
import { CreateSpringDto } from './create-spring.dto';

export class UpdateSpringDto extends PartialType(CreateSpringDto) {}
