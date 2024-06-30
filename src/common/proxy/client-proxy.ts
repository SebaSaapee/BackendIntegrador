import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {ClientProxy,ClientProxyFactory,Transport,} from '@nestjs/microservices';
import { RabbitMQ } from '../constants';

@Injectable()
export class ClientProxyIntegrador {
  constructor(private readonly config: ConfigService) {}

  clientProxyUsers(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: this.config.get('AMQP_URL'),
        queue: RabbitMQ.UserQueue,
      },
    });
  }

  clientProxyService(): ClientProxy{
    return ClientProxyFactory.create({
       transport: Transport.RMQ,
       options:{
           urls: this.config.get('AMQP_URL'),
           queue: RabbitMQ.ServicesQueue,
              }

    })
}

clientProxyPostulacion(): ClientProxy {
  return ClientProxyFactory.create({
    transport: Transport.RMQ,
    options: {
      urls: this.config.get('AMQP_URL'),
      queue: RabbitMQ.PostulacionQueue, // Asegúrate de tener definido RabbitMQ.PostulacionQueue en tus constantes
    },
  });
}


}
