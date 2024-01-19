import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from '../entities/item.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { User } from 'src/entities/user.entity';

@Controller('items')
// @UseGuards(JwtAuthGuard) コントローラー全体に適用する場合
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}
    
    @Get()
    findAll(): Item[] {
        return this.itemsService.findAll(); 
    }
        
    @Get(':id')
    findById(@Param('id', ParseUUIDPipe) id: string): Item {
        return this.itemsService.findById(id); 
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    async create(
        @Body() createItemDto: CreateItemDto,
        @GetUser() user: User
    ): Promise<Item> {
        return await this.itemsService.create(createItemDto);
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard)
    updateStatus(@Param('id', ParseUUIDPipe) id: string): Item {
        return this.itemsService.updateStatus(id); 
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    delete(@Param('id', ParseUUIDPipe) id: string): void {
        this.itemsService.delete(id);
    }
}
