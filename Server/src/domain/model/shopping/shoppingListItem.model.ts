import {Model, Table, BelongsTo, Column, DataType, ForeignKey} from "sequelize-typescript";
import { FoodItem } from '../food/foodItem.model';
import { toNumber } from '../../../annotations/toNumber';
import { Units } from '../../../enums/units';
import { ShoppingList } from './shoppingList.model';

@Table
export class ShoppingListItem extends Model {
    @toNumber
    @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
    quantity: number;

    @toNumber
    @Column({ type: DataType.DECIMAL(10, 2) })
    cost: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    unit: Units;

    @ForeignKey(() => FoodItem)
    foodItemId: number;

    @BelongsTo(() => FoodItem)
    foodItem: FoodItem;

    @ForeignKey(() => ShoppingList)
    @Column
    shoppingListId: number;

    @BelongsTo(() => ShoppingList)
    list: ShoppingList;
}

