import { Transaction, Model } from 'sequelize/types';
import { ILoggingService } from "../../commonServices/logging.service";
import { sequelize } from '../sequalize.dev';

export type CodeToRunInReadOnlyQuery = () => void;

export type CodeToRunInReadOnlyQueryAsync = () => Promise<void>;

export type CodeToRunInReadOnlyQueryWithResult<TResult extends Model> = () => TResult;

export type CodeToRunInReadOnlyQueryWithResultAsync<TResult extends Model> = () => Promise<TResult>;

export type CodeToRunInTransaction = (t: Transaction) => void;

export type CodeToRunInTransactionAsync = (t: Transaction) => Promise<void>;

export type CodeToRunInTransactionWithResult<TResult extends Model> = (t: Transaction) => TResult;

export type CodeToRunInTransactionWithResultAsync<TResult extends Model> = (t: Transaction) => Promise<TResult>;

export class RunInSequalize {

    public static readOnlyQueryAsync(logger: ILoggingService, codeToRunInReadOnlyQueryAsync: CodeToRunInReadOnlyQueryAsync): Promise<any> {
        return this.runInReadOnlyQueryAsync(logger, codeToRunInReadOnlyQueryAsync, null);
    }

    public static async readOnlyQueryWithResultAsync<TResult extends Model>(logger: ILoggingService,
        codeToRunInReadOnlyQueryWithResultAsync: CodeToRunInReadOnlyQueryWithResultAsync<TResult>): Promise<TResult> {
        return await this.runInReadOnlyQueryAsync(logger, null, codeToRunInReadOnlyQueryWithResultAsync);
    }

    public static async transationAsync(logger: ILoggingService, codeToRunInTransactionAsync: CodeToRunInTransactionAsync): Promise<void> {
        await sequelize.transaction(codeToRunInTransactionAsync);
    }

    private static async runInReadOnlyQueryAsync<TResult extends Model>(logger: ILoggingService,
        codeToRunInReadOnlyQueryAsync?: CodeToRunInReadOnlyQueryAsync,
        codeToRunInReadOnlyQueryWithResultAsync?: CodeToRunInReadOnlyQueryWithResultAsync<TResult>): Promise<TResult> {
            let result: TResult = null;

            if (codeToRunInReadOnlyQueryAsync) {
                await codeToRunInReadOnlyQueryAsync();
            } else {
                result = await codeToRunInReadOnlyQueryWithResultAsync();
            }

            return result;
    }
}
