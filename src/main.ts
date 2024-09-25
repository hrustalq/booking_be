import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import swagger from './_common/config/swagger';
import appConfig from './_common/config/app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  swagger(app);
  await app.listen(appConfig.port, appConfig.host);
}
bootstrap();
