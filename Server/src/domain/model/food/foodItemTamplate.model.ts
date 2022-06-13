import { Column } from 'sequelize-typescript';
import { FoodItemBase } from './foodItemBase.model';

/**
 * Represents a pre-canned item - that is one entered on the
 * server that suers can reference to in their pantry.
 */
export class FoodItemTemplate extends FoodItemBase {
    @Column({allowNull: true})
    barCode: string;
}