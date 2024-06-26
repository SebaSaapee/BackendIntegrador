import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ServiceModule } from './servicio/service.module';
import { PostulacionModule } from './postulacion/postulacion.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      //Se usa para importar el archivo variables de entorno
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    UserModule,
    AuthModule,
    ServiceModule,
    PostulacionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
