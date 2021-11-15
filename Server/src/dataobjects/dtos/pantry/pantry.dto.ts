import { BaseDto } from '../base.dto';
import { PantryItemDto } from './pantryItem.dto';

export interface PantryDto extends BaseDto {
    name: string;
    pantryItems?: PantryItemDto[];
}