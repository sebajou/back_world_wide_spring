import { Module } from '@nestjs/common';
import { SpringsService } from './springs.service';
import { SpringsController } from './springs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Spring, SpringSchema } from './schema/springs.schema';
import { SpringsSeed } from './schema/springs.seed'
import { CommandModule } from 'nestjs-command';

// const username = encodeURIComponent(process.env.DATABASE_USER);

// const password = encodeURIComponent(process.env.DATABASE_PWD);

// const uri = `mongodb+srv://${username}:${password}@clusterexplorateur.jotdnw9.mongodb.net/?retryWrites=true&w=majority`;


@Module({
  imports: [
    // MongooseModule.forRoot(uri),
    MongooseModule.forFeature(
      [
        {
          name: Spring.name,
          schema: SpringSchema
        },
      ]),
      CommandModule,
    ],
  controllers: [SpringsController],
  providers: [SpringsService, SpringsSeed],
})
export class SpringsModule {}
