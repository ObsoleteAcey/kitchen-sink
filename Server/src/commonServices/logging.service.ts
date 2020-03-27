import { createLogger, Logger, transports } from 'winston';

export interface ILoggingService {
    error: (message: string, exception: any) => void;
    debug: (message: string) => void;
    trace: (message: string) => void;
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

    error(message: string, exception: any) {
        this._logger.error(`${message} - EXCEPTION: ${JSON.stringify(exception)}`);
    }

    debug(message: string) {
        this._logger.debug(message);
    }

    trace(message: string) {
        this._logger.silly(message);
    }
}
