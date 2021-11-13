import { ILoggingService } from '../../commonServices/logging.service';

export type CodeToRunInErrorLogger = () => void;

export type CodeToRunInErrorLoggerWithResult<TResult> = () => TResult;

export type CodeToRunInErrorLoggerAsync = () => Promise<void>;

export type CodeToRunInErrorLoggerWithResultAsync<TResult> = () => Promise<TResult>;

export class RunIn {
    public static errorLogger(loggingService: ILoggingService, codeToRunInErrorLogger: CodeToRunInErrorLogger): void {
        this.runInErrorLoggerAndReturnResult<void>(loggingService, codeToRunInErrorLogger, null);
    }

    public static errorLoggerAsync(loggingService: ILoggingService, codeToRunInErrorLoggerAsync: CodeToRunInErrorLoggerAsync): Promise<null> {
        return this.runInErrorLoggerAndReturnResultAsync<null>(loggingService, codeToRunInErrorLoggerAsync, null);
    }

    public static errorLoggerWithResult<TResult>(loggingService: ILoggingService, codeToRunInErrorLoggerWithResult: CodeToRunInErrorLoggerWithResult<TResult>): TResult {
        return this.runInErrorLoggerAndReturnResult<TResult>(loggingService, null, codeToRunInErrorLoggerWithResult);
    }

    public static errorLoggerWithResultAsync<TResult>(loggingService: ILoggingService,
            codeToRunInErrorLoggerWithResultAsync: CodeToRunInErrorLoggerWithResultAsync<TResult>): Promise<TResult> {
        return this.runInErrorLoggerAndReturnResultAsync<TResult>(loggingService, null, codeToRunInErrorLoggerWithResultAsync);
    }

    private static runInErrorLoggerAndReturnResult<TResult>(loggingService: ILoggingService,
            codeToRunInErrorLogger: CodeToRunInErrorLogger,
            codeToRunInErrorLoggerWithResult: CodeToRunInErrorLoggerWithResult<TResult>): TResult {

        let result: TResult = null;

        try {
            if (codeToRunInErrorLogger) {
                codeToRunInErrorLogger();
            } else {
                result = codeToRunInErrorLoggerWithResult();
            }
        } catch(ex) {
            loggingService.error("An error occured", ex);
        }

        return result;
    }

    private static runInErrorLoggerAndReturnResultAsync<TResult>(loggingService: ILoggingService,
        codeToRunInErrorLoggerAsync: CodeToRunInErrorLoggerAsync,
        codeToRunInErrorLoggerWithResultAsync: CodeToRunInErrorLoggerWithResultAsync<TResult>): Promise<TResult> {

         return new Promise<TResult>((resolve, reject) => {
            let result: Promise<any> = null;

            try {
                if (codeToRunInErrorLoggerAsync) {
                    result = codeToRunInErrorLoggerAsync();
                } else {
                    result = codeToRunInErrorLoggerWithResultAsync();
                }

                resolve(result);
            } catch(ex) {
                loggingService.error("An error occured", ex);
                reject("An error occured");
            }
        });
    }
}
