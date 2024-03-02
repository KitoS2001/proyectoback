import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from 'src/auth/entities/auth.entity';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([Auth])],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
