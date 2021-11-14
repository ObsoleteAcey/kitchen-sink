import {Model, Column, Table, HasMany} from 'sequelize-typescript';
import { FoodItem } from './foodItem';

@Table
export class FoodItemType extends Model {
    @Column({allowNull: false})
    name: string;

    @Column({allowNull: false})
    description: string;

    @HasMany(() => FoodItem)
    foodItems: FoodItem[];
}
