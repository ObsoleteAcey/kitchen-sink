import { createMapper } from '@automapper/core';
import { classes } from '@automapper/classes';
import { createMetadataMap } from '@automapper/pojos';
import { PantryDto } from '../dataobjects/dtos/pantry/pantry.dto';
import { PantryItemDto } from '../dataobjects/dtos/pantry/pantryItem.dto';
import { PantryItemInventoryDto } from '../dataobjects/dtos/pantry/pantryItemInventory.dto';

export const mapper = createMapper({
  name: 'someName',
  pluginInitializer: classes,
});

createMetadataMap<PantryItemInventoryDto>('PantryItemInventoryDto', {
    cost: Number,
    quantity: Number
  });

createMetadataMap<PantryItemDto>('PantryItemDto', {
    inventory: 'PantryItemInventoryDto'
  });

createMetadataMap<PantryDto>('PantryDto', {
    name: String,
    pantryItems: 'PantryItem'
  });