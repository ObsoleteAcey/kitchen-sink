import { Model, Table, HasMany, Column, DataType } from 'sequelize-typescript';
import { PantryItem } from './pantryItem';
import { PantryDto } from '../../../dataobjects/entities/pantry/pantryDto';

@Table
export class Pantry extends Model<Pantry> {
    @HasMany(() => PantryItem)
    foodItems?: PantryItem[];

    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    public toDto(): PantryDto {
        return {
            name: this.name
        }
    }
}

