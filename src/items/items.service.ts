import { Injectable } from '@nestjs/common';
import { Item } from './item.model';

@Injectable() // DI対象として登録するためのデコレータ
export class ItemsService {
    private items: Item[] = [];

    findAll(): Item[]{
        return this.items; 
    }

    create(item: Item): Item {
        this.items.push(item);
        return item;
    }
}
