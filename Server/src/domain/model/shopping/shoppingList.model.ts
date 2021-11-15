import {Model, Table, HasMany} from 'sequelize-typescript';
import { ShoppingListItem } from './shoppingListItem.model';

@Table
export class ShoppingList extends Model {
    @HasMany(() => ShoppingListItem, 'shoppingListId')
    items: ShoppingListItem[];
}
