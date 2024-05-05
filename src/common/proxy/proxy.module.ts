import { Module } from '@nestjs/common';
import { ClientProxyWebIntegrador } from './client-proxy';

@Module({
  providers: [ClientProxyWebIntegrador],
  exports: [ClientProxyWebIntegrador],
})
export class ProxyModule {}
