import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm';

const dbConfig = require("../ormconfig.js"); 
@Module({
  imports: [
    ItemsModule,
    TypeOrmModule.forRoot(dbConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
