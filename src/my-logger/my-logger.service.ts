import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class MyLoggerService extends ConsoleLogger {
  log(message: unknown, context?: unknown, ...rest: unknown[]): void {
    const entry = `${context}\t${message}`;
    super.log(message, context);
  }
  error(
    message: unknown,
    stack?: unknown,
    context?: unknown,
    ...rest: unknown[]
  ): void {
    const entry = `${context}\t${message}`;
    super.error(message, context);
  }
}
