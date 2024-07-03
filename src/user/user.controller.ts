import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ClientProxyIntegrador } from 'src/common/proxy/client-proxy';
import { UserDTO } from './dto/user.dto';
import { IUser } from 'src/common/interfaces/user.interface';
import { Observable } from 'rxjs';
import { UserMsg } from 'src/common/constants';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('users')

@Controller('api/v2/user')
export class UserController {
  constructor(private readonly clientProxy: ClientProxyIntegrador) {}
  private _clientProxyUser = this.clientProxy.clientProxyUsers();

  @Post()
  create(@Body() userDTO: UserDTO): Observable<IUser> {
    return this._clientProxyUser.send(UserMsg.CREATE, userDTO);
  }

  @Get()
  findAll(): Observable<IUser[]> {
    return this._clientProxyUser.send(UserMsg.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IUser> {
    return this._clientProxyUser.send(UserMsg.FIND_ONE, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() userDTO: UserDTO): Observable<IUser> {
    return this._clientProxyUser.send(UserMsg.UPDATE, { id, userDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyUser.send(UserMsg.DELETE, id);
  }

  @Post('generate-recovery-code/:email')
  generateRecoveryCode(@Param('email') email: string): Observable<any> {
    return this._clientProxyUser.send(UserMsg.GENERATE_RECOVERY_CODE, email);
  }

  @Post('reset-password')
  resetPassword(@Body() payload: { email: string, recoveryCode: string, newPassword: string }): Observable<any> {
    return this._clientProxyUser.send(UserMsg.RESET_PASSWORD, payload);
  }
}