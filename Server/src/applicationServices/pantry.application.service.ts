import { LoggingService } from '../commonServices/logging.service';
import { PantryDomainService } from '../domain/services/pantry.domain.service';

export class PantryApplicationService {
    constructor(private _pantryDomainService: PantryDomainService,
        private _loggingService: LoggingService) {

    }


}