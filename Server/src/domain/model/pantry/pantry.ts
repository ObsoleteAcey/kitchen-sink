import {Model, Table, HasMany, Column, DataType} from 'sequelize-typescript';
import { PantryItem } from './pantryItem';

@Table
export class Pantry extends Model<Pantry> {
    @HasMany(() => PantryItem)
    foodItems: PantryItem[];

    @Column({ type: DataType.STRING, allowNull: false })
    name: string;
}

