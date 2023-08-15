import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SpringComposition, SpringLocalisation, SpringPrice, SpringEntity } from '../entities/spring.entity';


export type SpringDocument = Spring & Document;

@Schema({
    timestamps: { createdAt: 'created', updatedAt: 'updated'},
})
export class Spring { 
    @Prop({ required: true})
    name: string; 

    @Prop({ required: false})
    composition: SpringComposition;


    @Prop({ required: false})
    description: SpringComposition;
    
    @Prop({ required: false})
    brand: string;

    @Prop({ required: false})
    price: SpringPrice;

    @Prop({ required: false})
    localisation: SpringLocalisation;

    @Prop({ required: false})
    startExplotationDate: Date;
}

export const SpringSchema = SchemaFactory.createForClass(Spring)