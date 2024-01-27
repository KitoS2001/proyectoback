import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,
  ) {}

  create(createAuthDto: CreateAuthDto) {
    const newuser = this.authRepository.create(createAuthDto)
    return this.authRepository.save(newuser)
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
