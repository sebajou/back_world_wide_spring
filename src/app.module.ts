import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpringsModule } from './springs/springs.module';

@Module({
  imports: [SpringsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
