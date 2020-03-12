import {Model, Column, Table, BelongsToMany, Scopes, CreatedAt, UpdatedAt, AutoIncrement, HasOne} from "sequelize-typescript";
import { FoodItemType } from './foodItemType';
import { Pantry } from "./pantry";

@Table
export class FoodItem extends Model<FoodItem> {
    @Column({allowNull: false})
    name: string;

    @HasOne(() => Pantry)
    pantry: Pantry;

    @HasOne(() => FoodItemType)
    type: FoodItemType;
}
