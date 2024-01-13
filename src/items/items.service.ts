import { Injectable } from '@nestjs/common';
import { Item } from './item.model';

@Injectable() // DI対象として登録するためのデコレータ
export class ItemsService {
    private items: Item[] = [];

    findAll() {
        return 'Get all items by Service'; 
    }

    create(item: Item): Item {
        this.items.push(item);
        return item;
    }
}
