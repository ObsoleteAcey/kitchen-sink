import { LoggingService } from '../../commonServices/logging.service';
import { RunInSequalize } from '../utils/runInSequalize';
import { PantryDto } from '../../dataobjects/entities/pantry/pantryDto';
import { Pantry } from '../model/pantry/pantry';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../config/types';

@injectable()
export class PantryDomainService {
    constructor(
        @inject(TYPES.LoggingService)
        private _loggingService: LoggingService) {
        // do nothing
    }

    public async getPantryById(id: number): Promise<PantryDto> {
        const result = await RunInSequalize.readOnlyQueryWithResultAsync<Pantry>(this._loggingService, (): Promise<Pantry> => {
            return Pantry.findByPk(id);
        });

        return result.toDto();
    }
}
