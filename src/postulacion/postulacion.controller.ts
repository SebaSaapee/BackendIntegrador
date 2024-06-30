import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ClientProxyIntegrador } from 'src/common/proxy/client-proxy';
import { PostulacionDTO } from './dto/postulacion.dto'; // Asegúrate de tener definido el DTO para postulación
import { PostulacionMsg } from 'src/common/constants'; // Asegúrate de tener definido los mensajes para RabbitMQ
import { IPostulacion } from 'src/common/interfaces/postulacion.interface'; // Asegúrate de tener definida la interfaz de postulación

@ApiTags('postulacion')
@UseGuards(JwtAuthGuard)
@Controller('api/v2/postulacion')
export class PostulacionController {
  constructor(private readonly clientProxy: ClientProxyIntegrador) {}
  private _clientProxyPostulacion = this.clientProxy.clientProxyPostulacion();

  @Post(':userId/:serviceId')
  create(
    @Param('userId') usuarioId: string,
    @Param('serviceId') servicioId: string,
    @Body() postulacionDTO: PostulacionDTO): Observable<IPostulacion> {
    // Set user_id and service_id in the postulacionDTO
    usuarioId = usuarioId;
    servicioId = servicioId;

    const payload = { postulacionDTO, usuarioId,servicioId };
    return this._clientProxyPostulacion.send(PostulacionMsg.CREATE, payload);
  }

  @Get()
  findAll(): Observable<IPostulacion[]> {
    return this._clientProxyPostulacion.send(PostulacionMsg.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IPostulacion> {
    return this._clientProxyPostulacion.send(PostulacionMsg.FIND_ONE, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() postulacionDTO: PostulacionDTO): Observable<IPostulacion> {
    return this._clientProxyPostulacion.send(PostulacionMsg.UPDATE, { id, postulacionDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyPostulacion.send(PostulacionMsg.DELETE, id);
  }
}