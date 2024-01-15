import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from '../entities/item.entity';
import { ItemStatus } from './item-status.enum';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemRepository } from './item.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable() // DI対象として登録するためのデコレータ
export class ItemsService {
	constructor(
		private readonly itemRepository: ItemRepository
	) {}
	
	private items: Item[] = [];

	findAll(): Item[]{
		return this.items; 
	}

	findById(id: string): Item {
		const found = this.items.find(item => item.id === id);
		if(!found) {
			throw new NotFoundException();
		}
		return found; 
	}
 
	async create(createItemDto: CreateItemDto): Promise<Item> {
		return await this.itemRepository.createItem(createItemDto);  
	}

	updateStatus(id: string): Item {
		const item = this.findById(id);
		item.status = ItemStatus.SOLD_OUT;
		return item;
	}

	delete(id: string): void {
		this.items = this.items.filter(item => item.id !== id);
	}
}
