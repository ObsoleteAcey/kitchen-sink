import { ILoggingService } from '../../commonServices/logging.service';

export type codeToRunInErrorLogger = () => void;

export type codeToRunInErrorLoggerWithResult<TResult> = () => TResult;

export type codeToRunInErrorLoggerAsync = () => Promise<void>;

export type codeToRunInErrorLoggerWithResultAsync<TResult> = () => Promise<TResult>;

export class RunIn {
    public static errorLogger(loggingService: ILoggingService, theCodeToRunInErrorLogger: codeToRunInErrorLogger): void {
        this.runInErrorLoggerAndReturnResult<any>(loggingService, theCodeToRunInErrorLogger, null);
    }

    public static errorLoggerAsync(loggingService: ILoggingService, theCodeToRunInErrorLoggerAsync: codeToRunInErrorLoggerAsync): Promise<any> {
        return this.runInErrorLoggerAndReturnResult<any>(loggingService, theCodeToRunInErrorLoggerAsync, null);
    }

    public static errorLoggerWithResult<TResult>(loggingService: ILoggingService, theCodeToRunInErrorLoggerWithResult: codeToRunInErrorLoggerWithResult<TResult>): TResult {
        return this.runInErrorLoggerAndReturnResult<TResult>(loggingService, null, theCodeToRunInErrorLoggerWithResult);
    }

    public static errorLoggerWithResultAsync<TResult>(loggingService: ILoggingService,
            theCodeToRunInErrorLoggerWithResultAsync: codeToRunInErrorLoggerWithResultAsync<TResult>): Promise<TResult> {
        return this.runInErrorLoggerAndReturnResultAsync<TResult>(loggingService, null, theCodeToRunInErrorLoggerWithResultAsync);
    }

    private static runInErrorLoggerAndReturnResult<TResult>(loggingService: ILoggingService,
            theCodeToRunInErrorLogger: codeToRunInErrorLogger,
            theCodeToRunInErrorLoggerWithResult: codeToRunInErrorLoggerWithResult<TResult>): TResult {

        let result: TResult = null;

        try {
            if (theCodeToRunInErrorLogger) {
                theCodeToRunInErrorLogger();
            } else {
                result = theCodeToRunInErrorLoggerWithResult();
            }
        } catch(ex) {
            loggingService.error("An error occured", ex);
        }

        return result;
    }

    private static runInErrorLoggerAndReturnResultAsync<TResult>(loggingService: ILoggingService,
        theCodeToRunInErrorLoggerAsync: codeToRunInErrorLoggerAsync,
        theCodeToRunInErrorLoggerWithResultAsync: codeToRunInErrorLoggerWithResultAsync<TResult>): Promise<TResult> {

         return new Promise<TResult>((resolve, reject) => {
            let result: Promise<any> = null;

            try {
                if (theCodeToRunInErrorLoggerAsync) {
                    result = theCodeToRunInErrorLoggerAsync();
                } else {
                    result = theCodeToRunInErrorLoggerWithResultAsync();
                }

                resolve(result);
            } catch(ex) {
                loggingService.error("An error occured", ex);
                reject("An error occured");
            }
        });
    }
}
