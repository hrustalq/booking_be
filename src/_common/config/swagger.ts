import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export default function (app: INestApplication<unknown>) {
  const config = new DocumentBuilder()
    .setTitle('Bananagun booking API')
    .setDescription('API для бронирования в сети компьютерных клубов Bananagun')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
}
