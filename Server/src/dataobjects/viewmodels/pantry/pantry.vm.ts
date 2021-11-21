import { AutoMap } from '@automapper/classes';
import { PantryItemViewModel } from './pantryItem.vm';

export class PantryViewModel {
    @AutoMap()
    name: string;
    @AutoMap({ typeFn: () => PantryItemViewModel})
    pantryItems: PantryItemViewModel[];
}
