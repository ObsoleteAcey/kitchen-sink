import {Model, Table, HasOne, Column, DataType} from 'sequelize-typescript';
import { FoodItem } from '../food/foodItem';
import { ToNumber } from '../../../annotations/toNumber';
import { Units } from '../../../enums/units';

@Table
export class PantryItemInventory extends Model<PantryItemInventory> {
    @ToNumber
    @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
    quantity: number;

    @ToNumber
    @Column({ type: DataType.DECIMAL(10, 2) })
    cost: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    unit: Units;

    @HasOne(() => FoodItem)
    foodItem: FoodItem;
}

