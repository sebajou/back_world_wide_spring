import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSpringDto } from './dto/create-spring.dto';
import { UpdateSpringDto } from './dto/update-spring.dto';
import { Spring, SpringDocument } from './schema/springs.schema';

@Injectable()
export class SpringsService {
  constructor(
    @InjectModel(Spring.name)
    private readonly springModel: Model<SpringDocument>,
  ) {}

  async create(createSpringDto: CreateSpringDto): Promise<SpringDocument> {
    const spring = new this.springModel(createSpringDto);
    return spring.save();
  }

  async findAll(): Promise<SpringDocument[]> {
    return this.springModel.find();
  }

  async findOne(id: string) {
    return this.springModel.findById(id);

  }

  async update(id: string, updateSpringDto: UpdateSpringDto) {
    return this.springModel.findByIdAndUpdate(id, updateSpringDto);
  }

  async remove(id: string) {
    return this.springModel.findByIdAndRemove(id);
  }
}
