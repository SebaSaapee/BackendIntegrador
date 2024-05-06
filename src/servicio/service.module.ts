import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { ServiceController } from './service.controller';


@Module({
  imports:[ProxyModule],
  controllers: [ServiceController]
})
export class ServiceModule {}
