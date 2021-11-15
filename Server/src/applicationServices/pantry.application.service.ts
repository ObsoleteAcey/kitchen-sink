import { inject, injectable } from 'inversify';
import { LoggingService } from '../commonServices/logging.service';
import { TYPES } from '../config/types.config';
import { PantryDto } from '../dataobjects/dtos/pantry/pantry.dto';
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
