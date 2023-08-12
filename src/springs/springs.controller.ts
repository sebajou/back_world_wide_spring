import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { SpringsService } from './springs.service';
import { CreateSpringDto } from './dto/create-spring.dto';
import { UpdateSpringDto } from './dto/update-spring.dto';

@Controller('springs')
export class SpringsController {
  constructor(private readonly springsService: SpringsService) {}

  @Post()
  create(@Body() createSpringDto: CreateSpringDto) {
    return this.springsService.create(createSpringDto);
  }

  @Get()
  findAll() {
    return this.springsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.springsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, 
  @Body() 
  updateSpringDto: UpdateSpringDto) {
    return this.springsService.update(id, updateSpringDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.springsService.remove(id);
  }
}
