import { PantryItemViewModel } from './pantryItem.viewmodel';

export interface PantryViewModel {
    name: string;
    pantryItems: PantryItemViewModel[];
}
