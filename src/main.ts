import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { InternalServerErrorFilter } from './errorfilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new InternalServerErrorFilter());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
