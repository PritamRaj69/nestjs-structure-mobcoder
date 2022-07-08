import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
      MongooseModule.forRoot('please set the mongo connection', { useNewUrlParser: true })
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}
