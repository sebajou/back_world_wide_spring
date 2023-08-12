import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { SpringComposition, SpringLocalisation, SpringPrice } from "../entities/spring.entity";

export class CreateSpringDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(42)
    name: string;

    composition: SpringComposition;

    @IsString()
    @MinLength(450)
    description: SpringComposition;
    
    @IsString()
    @MaxLength(42)
    brand: string;

    price: SpringPrice;

    localisation: SpringLocalisation;

    startExplotationDate: Date;
}
