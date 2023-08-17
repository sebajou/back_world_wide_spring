import { IsNotEmpty, IsString, MaxLength, MinLength, IsOptional } from "class-validator";
import { SpringComposition, SpringLocalisation, SpringPrice } from "../entities/spring.entity";

export class CreateSpringDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(42)
    name: string;

    @IsOptional()
    composition: SpringComposition[];

    @IsOptional()
    @IsString()
    @MinLength(450)
    description: string;
 
    @IsOptional()
    @IsString()
    @MaxLength(42)
    brand: string;

    @IsOptional()
    price: SpringPrice[];

    @IsOptional()
    localisation: SpringLocalisation;

    @IsOptional()
    startExploitationDate: Date;
}
