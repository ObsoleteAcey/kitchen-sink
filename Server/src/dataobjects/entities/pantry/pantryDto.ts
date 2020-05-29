import {PantryItemDto} from './pantryItemDto';

export interface PantryDto {
    name: string;
    pantryItems: PantryItemDto[];
}