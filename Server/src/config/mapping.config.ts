import { createMapper, Mapper } from '@automapper/core';
import { sequelize } from '@automapper/sequelize';
import { PantryDto } from '../dataobjects/dtos/pantry/pantry.dto';
import { PantryItemDto } from '../dataobjects/dtos/pantry/pantryItem.dto';
import { PantryItemInventoryDto } from '../dataobjects/dtos/pantry/pantryItemInventory.dto';
import { PantryViewModel } from '../dataobjects/viewmodels/pantry/pantry.vm';
import { PantryItemViewModel } from '../dataobjects/viewmodels/pantry/pantryItem.vm';
import { PantryItemInventoryViewModel } from '../dataobjects/viewmodels/pantry/pantryItemInventory.vm';
import { Pantry } from '../domain/model/pantry/pantry.model';
import { PantryItem } from '../domain/model/pantry/pantryItem.model';


export class MappingConfigurator {
  private static _mapper: Mapper;

  private static configure(): Mapper
  {
    this._mapper = createMapper({
      name: 'sequalizeMapper',
      pluginInitializer: sequelize()
    });

    // map ViewModel to DTO
    this._mapper.createMap(PantryViewModel,PantryDto);
    this._mapper.createMap(PantryItemViewModel,PantryItemDto);
    this._mapper.createMap(PantryItemInventoryViewModel,PantryItemInventoryDto);
    // map DTO to ViewModel
    this._mapper.createMap(PantryDto, PantryViewModel);
    this._mapper.createMap(PantryItemDto, PantryItemViewModel);
    this._mapper.createMap(PantryItemInventoryDto, PantryItemInventoryViewModel);

    // map DTO to DomainModel
    this._mapper.createMap(PantryDto, Pantry);

    // map DomainModel to DTO
    this._mapper.createMap(Pantry, PantryDto);
    this._mapper.createMap(PantryItem, PantryItemDto);

    return this._mapper;
  }

  public static get mapper(): Mapper {
    if (!this._mapper) {
      this.configure();
    }

    return this._mapper;
  }
}
