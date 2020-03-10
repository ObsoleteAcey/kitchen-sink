import {Model, Column, Table, BelongsToMany, Scopes, CreatedAt, UpdatedAt, AutoIncrement} from "sequelize-typescript";
import { FoodItemType } from './foodItemType';

@Table
export class FoodItem extends Model<FoodItem> {
    @Column({allowNull: false})
    name: string;

    
}
