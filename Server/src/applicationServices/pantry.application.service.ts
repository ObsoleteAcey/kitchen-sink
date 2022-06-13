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

    public getAllPantriesAsync(): Promise<PantryDto[]>
    {
        this._loggingService.trace("getting all pantries");
        return this._pantryDomainService.getAllPatries();
    }

    public getPantryByIdAsync(id: number): Promise<PantryDto>
    {
        this._loggingService.trace(`getting pantry with ID ${id}`);
        return this._pantryDomainService.getPantryById(id);
    }

    public createPantry(pantryDto: PantryDto): Promise<PantryDto>
    {
        this._loggingService.trace(`Creating pantry with name ${pantryDto.name}`);

        return this._pantryDomainService.createPantry(pantryDto);
    }
}
