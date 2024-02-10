import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { ValidarLogin } from 'src/auth/dto/ValidLoginDto-auth';
import * as bcryptjs from 'bcryptjs';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class LoginService {

constructor(private authService: AuthService){}

  async validLogin(createLoginDto: ValidarLogin):Promise<boolean> {

    const data = this.authService.getUser(createLoginDto.email)

    if(await bcryptjs.compare(createLoginDto.contrasena, (await data).contrasena))
      return true;
    else
      return false; 
}
}
