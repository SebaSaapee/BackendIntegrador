
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


  
export class ServiceDTO{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly nombre: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly descripcion: string;
    @ApiProperty()
    @IsNotEmpty()
    readonly precio: number;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly contacto: string;
    @ApiProperty()
    readonly fotos: string[];
    @ApiProperty()
    readonly user_id: string;
    @ApiProperty()
    readonly rating: number;
    @ApiProperty()
    readonly reviews: ReviewDTO[]
    
}

export class ReviewDTO {
    @ApiProperty()
    readonly userId: string;
    @ApiProperty()
    readonly rating: number;
    @ApiProperty()
    readonly comentario: string;
    @ApiProperty()
    readonly fecha: Date;
}