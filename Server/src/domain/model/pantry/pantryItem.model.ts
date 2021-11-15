import {Model, Table, HasMany, ForeignKey, Column, BelongsTo} from 'sequelize-typescript';
import { FoodItem } from '../food/foodItem.model';
import { Pantry } from "./pantry.model";
import { PantryItemInventory } from './pantryItemInventory.model';

@Table
export class PantryItem extends Model {
    @ForeignKey(() => Pantry)
    @Column
    pantryId: number;

    @BelongsTo(() => Pantry)
    pantry: Pantry;

    @HasMany(() => PantryItemInventory, 'foodItemId')
    inventory: PantryItemInventory[];

    @ForeignKey(() => FoodItem)
    @Column
    foodItemId: number;

    @BelongsTo(() => FoodItem)
    foodItem: FoodItem;
}
