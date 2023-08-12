import { Module } from '@nestjs/common';
import { SpringsService } from './springs.service';
import { SpringsController } from './springs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Spring, SpringSchema } from './schema/springs.schema';

const username = encodeURIComponent('sebajou');

const password = encodeURIComponent('xxxx');

const uri = `mongodb+srv://${username}:${password}@clusterexplorateur.jotdnw9.mongodb.net/?retryWrites=true&w=majority`;


@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://sebajou:xxxx@clustersprings.jotdnw9.mongodb.net/?retryWrites=true&w=majority',
      {
        dbName: 'db_springs',
      },
    ),
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
