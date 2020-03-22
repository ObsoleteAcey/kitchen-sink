import { createLogger, Logger, transports } from 'winston';

export class LoggingService {
    private _logger: Logger;

    constructor() {
        this._logger = createLogger({
            transports: [
                new transports.Console()
            ]
        });
    }

    
}