import { NestFactory } from '@nestjs/core';
import { CommandModule, CommandService } from 'nestjs-command';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule, {
    logger: ['error'], // only errors
  });

  try {
    console.log("let's try")
    await app.select(CommandModule).get(CommandService).exec();
    console.log("seams to work")
  } catch (error) {
    console.error(error);
    await app.close();
    process.exit(1);
  }
}
bootstrap();