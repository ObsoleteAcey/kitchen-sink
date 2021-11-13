export enum LogLevel {
    debug,
    verbose,
    info,
    warn,
    error
}

export const logLevelName = new Map<LogLevel, string>([
    [LogLevel.debug, 'debug'],
    [LogLevel.verbose, 'verbose'],
    [LogLevel.info, 'info'],
    [LogLevel.warn, 'warn'],
    [LogLevel.error, 'error']
]);