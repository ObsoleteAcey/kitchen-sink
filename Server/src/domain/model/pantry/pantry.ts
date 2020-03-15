import {Model, Table, HasMany} from 'sequelize-typescript';
import { FoodItem } from '../food/foodItem';

@Table
export class Pantry extends Model<Pantry> {
    @HasMany(() => FoodItem)
    foodItems: FoodItem[];
}

