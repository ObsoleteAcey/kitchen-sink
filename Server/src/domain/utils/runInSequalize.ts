import {Sequelize} from 'sequelize-typescript';
import { ILoggingService } from '../../commonServices/logging.service';

export type CodeToRunInReadOnlyQuery = () => void;

export type CodeToRunInReadOnlyQueryAsync = () => Promise<void>;;

export type CodeToRunInReadOnlyQueryWithResult<TResult> = () => TResult;

export type CodeToRunInReadOnlyQueryWithResultAsync<TResult> = () => Promise<TResult>;

export type CodeToRunInTransaction = () => void;

export type CodeToRunInTransactionAsync = () => Promise<void>;;

export type CodeToRunInTransactionWithResult<TResult> = () => TResult;

export type CodeToRunInTransactionWithResultAsync<TResult> = () => Promise<TResult>;

export class RunInSequalize {
    // public static readOnlyQuery(logger: ILoggingService, sequalize: Sequelize, codeToRunInReadOnlyQuery: CodeToRunInReadOnlyQuery) {

    // }

    // public static readOnlyQueryWithResult<TResult>(logger: ILoggingService, sequalize: Sequelize,
    //     codeToRunInReadOnlyQueryWithResult: CodeToRunInReadOnlyQueryWithResult<TResult>): TResult {

    // }

    public static readOnlyQueryAsync(logger: ILoggingService, sequalize: Sequelize, codeToRunInReadOnlyQueryAsync: CodeToRunInReadOnlyQueryAsync): Promise<any> {
        return this.runInReadOnlyQueryAsync(logger, sequalize, codeToRunInReadOnlyQueryAsync, null);
    }

    public static readOnlyQueryWithResultAsync<TResult>(logger: ILoggingService, sequalize: Sequelize,
        codeToRunInReadOnlyQueryWithResultAsync: CodeToRunInReadOnlyQueryWithResultAsync<TResult>): Promise<TResult> {
        return this.runInReadOnlyQueryAsync(logger, sequalize, null, codeToRunInReadOnlyQueryWithResultAsync);
    }

    public static runInReadOnlyQueryWithResult<TResult>(logger: ILoggingService, sequalize: Sequelize,
        codeToRunInReadOnlyQueryWithResult: CodeToRunInReadOnlyQueryWithResult<TResult>): PromiseLike<TResult> {
            return sequalize.transaction().then(t => {
                const result: TResult = null;

                return result;
            });
    }

    private static async runInReadOnlyQueryAsync<TResult>(logger: ILoggingService, sequalize: Sequelize,
        codeToRunInReadOnlyQueryAsync?: CodeToRunInReadOnlyQueryAsync,
        codeToRunInReadOnlyQueryWithResultAsync?: CodeToRunInReadOnlyQueryWithResultAsync<TResult>): Promise<TResult> {
            let result: TResult = null;
            await sequalize.transaction().then(async t => {
                if (codeToRunInReadOnlyQueryAsync) {
                    await codeToRunInReadOnlyQueryAsync();
                } else {
                    result = await codeToRunInReadOnlyQueryWithResultAsync();
                }
            }).catch(error => {
                throw error;
            });

            return result;
    }
}
