import {Model, Table, HasOne, Column} from "sequelize-typescript";
import { DataTypes } from 'sequelize';
import { FoodItem } from './foodItem';
import { ToNumber } from '../../annotations/toNumber';

@Table
export class PantryItemInventory extends Model<PantryItemInventory> {
    @ToNumber
    @Column({ type: DataTypes.DECIMAL(10, 2) })
    quantity: number;

    @HasOne(() => FoodItem)
    foodItem: FoodItem;
}

