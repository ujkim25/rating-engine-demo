import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Rating Engine API')
  .setDescription('API endpoints for Rating Engine')
  .setVersion('1.0')
  .addTag('rating-engine')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  // 이렇게 하면, https://rating-engine-demo.onrender.com/api-docs 에 접속하면 API 문서를 볼 수 있습니다.
  
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
