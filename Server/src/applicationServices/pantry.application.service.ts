import { inject, injectable } from 'inversify';
import { LoggingService } from '../commonServices/logging.service';
import { TYPES } from '../config/types';
import { PantryDto } from '../dataobjects/entities/pantry/pantryDto';
import { PantryDomainService } from '../domain/services/pantry.domain.service';

@injectable()
export class PantryApplicationService {
    constructor(
        @inject(TYPES.PantryDomainService)
        private _pantryDomainService: PantryDomainService,
        @inject(TYPES.LoggingService)
        private _loggingService: LoggingService) {
        // do nothing
    }

    public getPantryByIdAsync(id: number): Promise<PantryDto>
    {
        return this._pantryDomainService.getPantryById(id);
    }
}
