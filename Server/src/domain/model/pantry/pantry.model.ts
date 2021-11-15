import { Model, Table, HasMany, Column, DataType, PrimaryKey } from 'sequelize-typescript';
import { PantryItem } from './pantryItem.model';
import { PantryDto } from '../../../dataobjects/dtos/pantry/pantry.dto';

@Table
export class Pantry extends Model {
     @HasMany(() => PantryItem, 'pantryId')
    foodItems: PantryItem[];

    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    public toDto(): PantryDto {
        return {
            id: this.id as number,
            name: this.name
        }
    }
}

