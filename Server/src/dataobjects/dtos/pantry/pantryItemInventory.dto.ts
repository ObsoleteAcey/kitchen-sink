import { BaseDto } from '../base.dto';

export class PantryItemInventoryDto extends BaseDto {
    quantity: number;
    cost: number;
}