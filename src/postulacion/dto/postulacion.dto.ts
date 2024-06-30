import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class PostulacionDTO {
    
    readonly servicioId: string;
    
    readonly usuarioId: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly mensaje: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly fechaSolicitada: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString() // Formato 'YYYY-MM-DD'
    readonly horarioSolicitado: string;
   // Formato 'HH:mm'
  }