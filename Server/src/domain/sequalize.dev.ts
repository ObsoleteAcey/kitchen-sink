
import {Sequelize} from 'sequelize-typescript';
import { FoodItem } from './model/food/foodItem.model';
import { FoodItemType } from './model/food/foodItemType.model';
import { Pantry } from './model/pantry/pantry.model';
import { PantryItem } from './model/pantry/pantryItem.model';
import { PantryItemInventory } from './model/pantry/pantryItemInventory.model';
import { ShoppingList } from './model/shopping/shoppingList.model';
import { ShoppingListItem } from './model/shopping/shoppingListItem.model';


export const sequelize = new Sequelize({
  dialect: 'sqlite',
  database: 'kitchensink',
  storage: ':memory:',
  // models: [__dirname + '/domain/model/**/*.ts'],
  /* modelMatch: (filename, member) => {
    return filename.substring(0, filename.indexOf('')) === member.toLowerCase();
  }*/
  models: [Pantry, PantryItem, PantryItemInventory,
  FoodItem, FoodItemType, ShoppingList, ShoppingListItem]
});

