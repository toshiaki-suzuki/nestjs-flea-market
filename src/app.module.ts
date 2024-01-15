import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

const dbConfig = require("../ormconfig.js"); 
@Module({
  imports: [
    ItemsModule,
    TypeOrmModule.forRoot(dbConfig)
  ]
})
export class AppModule {}
