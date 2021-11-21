import { BaseDto } from '../base.dto';
import { PantryItemInventoryDto } from './pantryItemInventory.dto';

export class  PantryItemDto extends BaseDto {
    inventory: PantryItemInventoryDto[];
}