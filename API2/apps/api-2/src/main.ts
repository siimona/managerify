import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = +process.env.APP_PORT || 5000;
  app.setGlobalPrefix('api');
  console.log('Port running on: ', port);

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('API2')
    .setDescription('API2')
    .setVersion('1.0')
    .addTag('API')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.enableCors();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded());
  app.use(bodyParser.text({ type: 'text/html' }));

  await app.listen(port);
}
bootstrap();
