import { inject, injectable } from 'inversify';
import { LoggingService } from '../commonServices/logging.service';
import { TYPES } from '../config/types';
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


}