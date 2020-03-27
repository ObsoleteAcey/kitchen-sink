export enum LogLevel {
    Debug,
    Verbose,
    Info,
    Warn,
    Error
}

export const LogLevelName = new Map<LogLevel, string>([
    [LogLevel.Debug, 'debug'],
    [LogLevel.Verbose, 'verbose'],
    [LogLevel.Info, 'info'],
    [LogLevel.Warn, 'warn'],
    [LogLevel.Error, 'error']
]);