import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { ValidarLogin } from 'src/auth/dto/ValidLoginDto-auth';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async validLogin(@Body() createLoginDto: ValidarLogin) {
    try {
      const data = this.loginService.validLogin(createLoginDto);
      if((await data) === true)
      return {
            message: 'Login correcto',
            status: 200
          }
      else
      return {
            message: 'Login incorrecto',
            status: 400
          }
    } catch (error) {
      throw new HttpException("Email no existe", HttpStatus.CONFLICT);
    }
  }
}
