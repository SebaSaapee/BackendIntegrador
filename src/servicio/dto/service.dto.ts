
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
    @IsString()
    readonly precio: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly contacto: string;
    //@ApiProperty()
    //@IsNotEmpty()
   // @IsString()
  //  readonly fotos: string[]; 
}