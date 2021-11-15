import {Model, Column, Table, BelongsTo, HasMany, ForeignKey} from 'sequelize-typescript';
import { FoodItemType } from './foodItemType.model';
import { PantryItem } from '../pantry/pantryItem.model';
import { ShoppingListItem } from '../shopping/shoppingListItem.model';

@Table
export class FoodItem extends Model {
    @Column({allowNull: false})
    name: string;

    @HasMany(() => PantryItem, 'foodItemId')
    pantryItems: PantryItem[];

    @HasMany(() => ShoppingListItem, 'foodItemId')
    shippingListItems: ShoppingListItem[];

    @ForeignKey(() => FoodItemType)
    @Column
    foodItemTypeId: number;

    @BelongsTo(() => FoodItemType)
    type: FoodItemType;
}
