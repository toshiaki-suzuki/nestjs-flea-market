import { Injectable } from '@nestjs/common';

@Injectable() // DI対象として登録するためのデコレータ
export class ItemsService {
    findAll(): string {
        return 'Get all items by Service'; 
    }
}
