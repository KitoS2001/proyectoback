import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { ValidarLogin } from 'src/auth/dto/ValidLoginDto-auth';
import * as bcryptjs from 'bcryptjs';
import { AuthService } from 'src/auth/auth.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from 'src/auth/entities/auth.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LoginService {

constructor( @InjectRepository(Auth) private authRepository: Repository <Auth>, private authService: AuthService){}

  async validLogin(createLoginDto: ValidarLogin):Promise<boolean> {

    const data = this.authService.getUser(createLoginDto.email)

    if(await bcryptjs.compare(createLoginDto.contrasena, (await data).contrasena))
      return true;
    else
      return false; 
}

asignarIntentos(id:number, intento:number){
  this.authRepository.query(
    "UPDATE usuarios SET intentos = "+intento+" WHERE id = "+id+""
  )
}

resetearIntentos(id:number){
  console.log("conteo iniciado")
  setTimeout(()=>{
    this.authRepository.query(
      "UPDATE usuarios SET intentos = 0 WHERE id = "+id+""
    )
    console.log("Intentos reseteados")
  },10000)
}
}
