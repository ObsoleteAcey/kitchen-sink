import { Column, Table, BelongsTo, HasMany, ForeignKey } from 'sequelize-typescript';
import { FoodItemType } from './foodItemType.model';
import { PantryItem } from '../pantry/pantryItem.model';
import { ShoppingListItem } from '../shopping/shoppingListItem.model';
import { FoodItemBase } from './foodItemBase.model';

@Table
export class FoodItem extends FoodItemBase {
    @HasMany(() => PantryItem, 'foodItemId')
    pantryItems: PantryItem[];

    @HasMany(() => ShoppingListItem, 'foodItemId')
    shippingListItems: ShoppingListItem[];
}
