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
    public static readOnlyQuery(logger: ILoggingService, sequalize: Sequelize, codeToRunInReadOnlyQuery: CodeToRunInReadOnlyQuery) {
        
    }
}
