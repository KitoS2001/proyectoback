import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import * as bcryptjs from 'bcryptjs';
import { ValidarLogin } from './dto/ValidLoginDto-auth';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,
  ) {}

  create(createAuthDto: CreateAuthDto) {
    const {contrasena,...resultado}=createAuthDto
    const newuser = this.authRepository.create({
      contrasena: bcryptjs.hashSync(contrasena,10),
      ...resultado
    })
    return this.authRepository.save(newuser)
  }


  async validLogin(createLoginDto: ValidarLogin):Promise<boolean> {

    const data = this.getUser(createLoginDto.email)

    if(await bcryptjs.compare(createLoginDto.contrasena, (await data).contrasena))
      return true;
    else
      return false; 
}

  findAll() {
    return this.authRepository.find();
  }

  findOne(id: string) {
    return this.authRepository.findOne({
      where: { email: id },
    });
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return this.authRepository.update(id,updateAuthDto)
  }

  remove(id: number) {
    return this.authRepository.delete({
      id_usuario: id
    })
  }
  getUser(email: string) {
    const user = this.authRepository.findOne({
      where: {
        email: email
      }
    });
    return user;
  }
}
