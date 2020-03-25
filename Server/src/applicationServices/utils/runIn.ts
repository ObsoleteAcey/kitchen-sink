import { ILoggingService } from '../../commonServices/logging.service';

export interface codeToRunInErrorLogger {
    (): void;
}

export interface codeToRunInErrorLoggerWithResult<TResult> {
    (): TResult;
}

export class runIn {
    public static errorLogger(loggingService: ILoggingService, codeToRunInErrorLogger: codeToRunInErrorLogger): void {
        runInErrorLoggerAndReturnResult<boolean>(loggingService, codeToRunInErrorLogger, null);
    }

    public static errorLoggerWithResult<TResult>(loggingService: ILoggingService, codeToRunInErrorLoggerWithResult: codeToRunInErrorLoggerWithResult<TResult>): TResult {
        return this.runInErrorLoggerAndReturnResult<TResult>(loggingService, null, codeToRunInErrorLoggerWithResult);
    }

    private static runInErrorLoggerAndReturnResult<TResult>(loggingService: ILoggingService, 
            codeToRunInErrorLogger: codeToRunInErrorLogger,
            codeToRunInErrorLoggerWithResult: codeToRunInErrorLoggerWithResult<TResult>): TResult {
        
        let result: TResult;

        try {

        } catch(ex) {

        } finally {

        }

        return result;
    }

}