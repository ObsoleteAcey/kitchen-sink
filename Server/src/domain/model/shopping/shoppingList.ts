import {Model, Table, HasMany} from 'sequelize-typescript';
import { ShoppingListItem } from './shoppingListItem';

@Table
export class ShoppingList extends Model<ShoppingList> {
    @HasMany(() => ShoppingListItem)
    items: ShoppingListItem[];
}
