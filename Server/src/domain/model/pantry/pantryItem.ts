import {Model, Table, HasMany, ForeignKey, Column, BelongsTo} from 'sequelize-typescript';
import { FoodItem } from '../food/foodItem';
import { Pantry } from "./pantry";
import { PantryItemInventory } from './pantryItemInventory';

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
