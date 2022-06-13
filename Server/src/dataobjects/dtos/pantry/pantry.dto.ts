import { AutoMap } from '@automapper/classes';
import { BaseDto } from '../base.dto';
import { PantryItemDto } from './pantryItem.dto';

export class PantryDto extends BaseDto {
    @AutoMap()
    name: string;

    @AutoMap({typeFn: () => PantryItemDto})
    pantryItems: PantryItemDto[];
}