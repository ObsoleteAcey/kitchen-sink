import {Model, Column, Table, BelongsToMany, Scopes, CreatedAt, UpdatedAt, AutoIncrement} from "sequelize-typescript";

@Table
export class FoodItemType extends Model<FoodItemType> {
    @Column({allowNull: false})
    name: string;

    @Column({allowNull: false})
    description: string;

    @BelongsToMany(() => Movie, () => MovieActor)
    movies?: Movie[];
}
