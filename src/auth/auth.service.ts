import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/user/dto/user.dto';
import { UserMsg } from 'src/common/constants';
import { ClientProxyIntegrador } from 'src/common/proxy/client-proxy';

@Injectable()
export class AuthService {
  constructor(
    private readonly clientProxy: ClientProxyIntegrador,
    private readonly jwtService: JwtService,
    
  ) {}

  private _clientProxyUser = this.clientProxy.clientProxyUsers();
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this._clientProxyUser
      .send(UserMsg.VALID_USER, {
        username,
        password,
      })
      .toPromise();

    if (user) return user;

    return null;
  }

  async signIn(user: any) {
    const payload = {
      username: user.username,
      sub: user._id,
    };

    return { access_token: this.jwtService.sign(payload), userId: user._id, };
  }

  async signUp(userDTO: UserDTO) {
    return await this._clientProxyUser
      .send(UserMsg.CREATE, userDTO)
      .toPromise();
  }

 
}
