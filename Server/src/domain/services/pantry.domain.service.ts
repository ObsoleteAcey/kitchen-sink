import { LoggingService } from '../../commonServices/logging.service';
import { RunInSequalize } from '../utils/runInSequalize';
import { PantryDto } from '../../dataobjects/dtos/pantry/pantry.dto';
import { Pantry } from '../model/pantry/pantry.model';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../config/types.config';
import { MappingService } from '../../commonServices/mapping.service';
import { Transaction } from 'sequelize/types';

@injectable()
export class PantryDomainService {
    constructor(
        @inject(TYPES.MappingService)
        private _mappingService: MappingService,
        @inject(TYPES.LoggingService)
        private _loggingService: LoggingService) {
        // do nothing
    }

    public async getAllPatries(): Promise<PantryDto[]> {
        const results = await RunInSequalize.readOnlyQueryWithResultAsync<Pantry>(this._loggingService, (): Promise<Pantry[]> => {
            return Pantry.findAll();
        });

        let pantryDtos: PantryDto[];
        if(results && Array.isArray(results)) {
            pantryDtos = this._mappingService.mapArray<Pantry, PantryDto>(results, PantryDto, Pantry);
        }

        return pantryDtos|| [];
    }

    public async getPantryById(id: number): Promise<PantryDto> {
        const result = await RunInSequalize.readOnlyQueryWithResultAsync<Pantry>(this._loggingService, (): Promise<Pantry> => {
            return Pantry.findByPk(id);
        });

        let pantryDto: PantryDto = null;
        if(result instanceof Pantry) {
            pantryDto = this._mappingService.map<Pantry, PantryDto>(result, PantryDto, Pantry);
        }

        return pantryDto;
    }

    public async createPantry(pantryDto: PantryDto): Promise<PantryDto>
    {
        let savedPantryDto: PantryDto;

        await RunInSequalize.transationAsync(this._loggingService, async (t: Transaction) => {
            const savedPantry = await Pantry.create(pantryDto, {transaction: t});
            savedPantryDto = this._mappingService.map(savedPantry, PantryDto, Pantry);
        });

        return savedPantryDto;
    }
}
