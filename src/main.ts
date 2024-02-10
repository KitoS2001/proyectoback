import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const CorsOptions: CorsOptions = {
    origin:[ 'http://localhost:4200','https://proyectoclinicaback-back-production.up.railway.app/'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: false,
  }

  app.enableCors(CorsOptions);

  await app.listen(3000);
}
bootstrap();
