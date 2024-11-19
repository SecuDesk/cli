import { ILogger } from "@secudesk/core/interfaces/i-logger";
import { LogLevel } from "@secudesk/core/services/log-service";

export class CliNativeLoggerService implements ILogger {
  constructor() {}

  log(_message: string, _level: LogLevel): void {
    // TODO: add a file logger if needed
  }

  show(message: string, level: LogLevel): void {
    if (level === LogLevel.info || level === LogLevel.success) {
      global.console.info(message);
    } else if (level === LogLevel.warn) {
      global.console.warn(message);
    } else {
      global.console.error(message);
    }
  }
}
