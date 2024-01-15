import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { ItemRepository } from './item.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from '../entities/item.entity';

@Module({
  // 他モジュールのエクスポートされたモジュールをインポート
  imports: [TypeOrmModule.forFeature([Item])], 
  controllers: [ItemsController],
  providers: [ItemsService, ItemRepository], // DI対象として登録
  exports: [TypeOrmModule] // 他モジュールで利用できるようにする
})
export class ItemsModule {}
