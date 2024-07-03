
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

export class ChatDTO{
    readonly _id?:string;
    @ApiProperty()
    readonly userId:string;
    @ApiProperty()
    readonly nombreUsuario?: string;
    @ApiProperty()
    readonly mensajeU ?:string;
    @ApiProperty()
    readonly prestadorServicio?: string;
    @ApiProperty()
    readonly respuesta?: string;
    @ApiProperty()
    readonly fecha: Date;
}