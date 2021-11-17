import { LoggingService } from '../../commonServices/logging.service';
import { RunInSequalize } from '../utils/runInSequalize';
import { PantryDto } from '../../dataobjects/dtos/pantry/pantry.dto';
import { Pantry } from '../model/pantry/pantry.model';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../config/types.config';
import { MappingService } from '../../commonServices/mapping.service';

@injectable()
export class PantryDomainService {
    constructor(
        @inject(TYPES.MappingService)
        private _mappingService: MappingService,
        @inject(TYPES.LoggingService)
        private _loggingService: LoggingService) {
        // do nothing
    }

    public async getPantryById(id: number): Promise<PantryDto> {
        const result = await RunInSequalize.readOnlyQueryWithResultAsync<Pantry>(this._loggingService, (): Promise<Pantry> => {
            return Pantry.findByPk(id);
        });

        let pantryDto: PantryDto = null;
        if(result) {
            pantryDto = this._mappingService.map<Pantry, PantryDto>(result, 'UserDto', 'User');
        }

        return pantryDto;
    }
}
