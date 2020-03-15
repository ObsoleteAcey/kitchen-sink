import {Model, Column, Table, HasOne, HasMany} from 'sequelize-typescript';
import { FoodItemType } from './foodItemType';
import { PantryItem } from '../pantry/pantryItem';

@Table
export class FoodItem extends Model<FoodItem> {
    @Column({allowNull: false})
    name: string;

    @HasMany(() => PantryItem)
    pantryItems: PantryItem[];

    @HasOne(() => FoodItemType)
    type: FoodItemType;
}
