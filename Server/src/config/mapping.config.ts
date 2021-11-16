import { createMapper, Mapper } from '@automapper/core';
import { pojos, createMetadataMap } from '@automapper/pojos';
import { PantryDto } from '../dataobjects/dtos/pantry/pantry.dto';
import { PantryItemDto } from '../dataobjects/dtos/pantry/pantryItem.dto';
import { PantryItemInventoryDto } from '../dataobjects/dtos/pantry/pantryItemInventory.dto';
import { PantryViewModel } from '../dataobjects/viewmodels/pantry/pantry.viewmodel';
import { PantryItemViewModel } from '../dataobjects/viewmodels/pantry/pantryItem.viewmodel';
import { PantryItemInventoryViewModel } from '../dataobjects/viewmodels/pantry/pantryItemInventory.viewModel';


export class MappingConfigurator {
  private static _mapper: Mapper;

  private static configure(): Mapper
  {
    this._mapper = createMapper({
      name: 'someName',
      pluginInitializer: pojos
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
      pantryItems: 'PantryItemDto'
    });

    createMetadataMap<PantryItemInventoryViewModel>('PantryItemInventoryViewModel', {
      cost: Number,
      quantity: Number
    });

    createMetadataMap<PantryItemViewModel>('PantryItemViewModel', {
      inventory: 'PantryItemInventoryViewModel'
    });

    createMetadataMap<PantryViewModel>('PantryViewModel', {
      name: String,
      pantryItems: 'PantryItemViewModel'
    });

    this._mapper.createMap<PantryItemInventoryDto, PantryItemInventoryViewModel>('PantryItemInventoryDto','PantryItemInventoryViewModel');
    this._mapper.createMap<PantryItemDto, PantryItemViewModel>('PantryItemDto','PantryItemViewModel');
    this._mapper.createMap<PantryDto, PantryViewModel>('PantryDto','PantryViewModel');

    return this._mapper;
  }

  public static get mapper(): Mapper {
    if (!this._mapper) {
      this.configure();
    }

    return this._mapper;
  }
}
