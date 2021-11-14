
import {Sequelize} from 'sequelize-typescript';
import { FoodItem } from './model/food/foodItem';
import { FoodItemType } from './model/food/foodItemType';
import { Pantry } from './model/pantry/pantry';
import { PantryItem } from './model/pantry/pantryItem';
import { PantryItemInventory } from './model/pantry/pantryItemInventory';
import { ShoppingList } from './model/shopping/shoppingList';
import { ShoppingListItem } from './model/shopping/shoppingListItem';


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

