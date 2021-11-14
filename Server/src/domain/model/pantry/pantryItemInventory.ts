import {Model, Table, BelongsTo, Column, DataType, ForeignKey} from 'sequelize-typescript';
import { FoodItem } from '../food/foodItem';
import { toNumber } from '../../../annotations/toNumber';
import { Units } from '../../../enums/units';
import { PantryItemInventoryDto } from '../../../dataobjects/entities/pantry/pantryItemInventoryDto';

@Table
export class PantryItemInventory extends Model {
    @toNumber
    @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
    quantity: number;

    @toNumber
    @Column({ type: DataType.DECIMAL(10, 2) })
    cost: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    unit: Units;

    @ForeignKey(() => FoodItem)
    @Column
    foodItemId: number;

    @BelongsTo(() => FoodItem)
    foodItem: FoodItem;

    public toDto(): PantryItemInventoryDto {
        return {
            quantity: this.quantity,
            cost: this.cost
        };
    }
}
