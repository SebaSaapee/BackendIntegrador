import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { PostulacionController } from './postulacion.controller';



@Module({
  imports:[ProxyModule],
  controllers: [PostulacionController]
})
export class PostulacionModule {}