import { Module } from '@nestjs/common';
import { ClientProxyIntegrador } from './client-proxy';

@Module({
  providers: [ClientProxyIntegrador],
  exports: [ClientProxyIntegrador],
})
export class ProxyModule {}
