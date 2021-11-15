import { BaseDto } from '../base.dto';

export interface PantryItemInventoryDto extends BaseDto {
    quantity: number;
    cost: number;
}