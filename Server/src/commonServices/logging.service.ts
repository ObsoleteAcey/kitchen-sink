import { createLogger, Logger, transports } from 'winston';

export interface ILoggingService {

}

export class LoggingService implements ILoggingService {
    private _logger: Logger;

    constructor() {
        this._logger = createLogger({
            transports: [
                new transports.Console()
            ]
        });
    }

    
}