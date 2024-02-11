import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const CorsOptions: CorsOptions = {
    origin:[ 'https://proyectoclinicaback-back-production.up.railway.app','https://65c8fd52cd4bfb3f24308df1--verdant-halva-9d1a43.netlify.app/'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: false,
  }

  app.enableCors(CorsOptions);

  await app.listen( process.env.PORT || 3000 );
}
bootstrap();
