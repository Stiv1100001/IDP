import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.create(AppModule);

  await app.listen(
    process.env.PORT as string,
    process.env.HOST as string,
    () => {
      logger.log(
        `Server listen on ${process.env.HOST} at port ${process.env.PORT}`,
      );
    },
  );
}
bootstrap();
