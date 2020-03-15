import {Model, Table, HasOne, HasMany} from 'sequelize-typescript';
import { FoodItem } from '../food/foodItem';
import { Pantry } from "./pantry";
import { PantryItemInventory } from './pantryItemInventory';

@Table
export class PantryItem extends Model<PantryItem> {
    @HasOne(() => Pantry)
    pantry: Pantry;

    @HasMany(() => PantryItemInventory)
    inventory: PantryItemInventory[];

    @HasOne(() => FoodItem)
    foodItem: FoodItem;
}
