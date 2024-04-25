import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpringsModule } from './springs/springs.module';

const username = encodeURIComponent(process.env.DATABASE_USER);

const password = encodeURIComponent(process.env.DATABASE_PWD);

// const uri = `mongodb+srv://${username}:${password}@clustersprings.aihx9nm.mongodb.net/?retryWrites=true&w=majority`;
const uri = `mongodb://root:example@172.19.0.2:27017/`;

console.log(uri);

@Module({
  imports: [
    MongooseModule.forRoot(uri, {
      dbName: 'db_springs',
    }),
    SpringsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
