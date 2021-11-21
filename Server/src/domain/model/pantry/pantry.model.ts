import { AutoMap } from '@automapper/classes';
import { Model, Table, HasMany, Column, DataType, PrimaryKey } from 'sequelize-typescript';
import { PantryItem } from './pantryItem.model';

@Table
export class Pantry extends Model {
    @AutoMap()
    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @AutoMap({typeFn:() => PantryItem})
    @HasMany(() => PantryItem, 'pantryId')
    pantryItems: PantryItem[];
}
