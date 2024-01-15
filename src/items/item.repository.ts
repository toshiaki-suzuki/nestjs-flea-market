import { Item } from "src/entities/item.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateItemDto } from "./dto/create-item.dto";
import { ItemStatus } from "./item-status.enum";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ItemRepository extends Repository<Item> {
  constructor(
    @InjectRepository(Item)
    private readonly repository: Repository<Item>
  ) { 
    super(Item, repository.manager);
  }

  // DB操作は非同期で行うので、asyncをつける
  async createItem(createItemDto: CreateItemDto): Promise<Item> {
    const { name, price, description } = createItemDto;
    const item = this.create({
      name,
      price,
      description,
      status: ItemStatus.ON_SALE,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    await this.save(item);

    return item;
  }
}