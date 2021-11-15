import { BaseDto } from '../base.dto';
import { PantryItemInventoryDto } from './pantryItemInventory.dto';

export interface PantryItemDto extends BaseDto {
    inventory: PantryItemInventoryDto[];
}