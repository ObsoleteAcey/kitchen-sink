import {Model, Column, Table, BelongsTo, ForeignKey} from 'sequelize-typescript';
import { FoodItemType } from './foodItemType.model';

@Table
export class FoodItemBase extends Model {
    @Column({allowNull: false})
    name: string;

    @ForeignKey(() => FoodItemType)
    @Column
    foodItemTypeId: number;

    // @BelongsTo(() => FoodItemType)
    type: FoodItemType;
}
