// Type definitions for fancy-log 1.3
// Project: https://github.com/js-cli/fancy-log
// Definitions by: Pine Mizune <https://github.com/pine>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace FancyLog {
    interface Logger {
        (...args: any[]): Logger;
        dir(...args: any[]): Logger;
        error(...args: any[]): Logger;
        info(...args: any[]): Logger;
        warn(...args: any[]): Logger;
    }
}

declare var logger: FancyLog.Logger;
export = logger;
