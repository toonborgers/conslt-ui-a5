import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContextService} from '../context/context.service';

@Injectable()
export class LogService {
  private logUrl: string;

  constructor(private http: HttpClient, contextService: ContextService) {
    this.logUrl = `${contextService.baseUrl}log`;
  }

  info(message: string) {
    console.log('Info:' + message);
    this.sendToBackend(LogMessage.info(message));
  }

  debug(message: string) {
    console.log('Debug: ' + message);
    this.sendToBackend(LogMessage.debug(message));
  }

  warn(message: string) {
    console.log('Warn:' + message);
    this.sendToBackend(LogMessage.warn(message));
  }

  error(message: string) {
    this.exception(message, []);
  }

  exception(message: string, stack: string[]) {
    console.log('In log service');
    console.error(message);
    this.sendToBackend(LogMessage.error(message));
  }

  private sendToBackend(message: LogMessage) {
  }
}

class LogMessage {
  constructor(private message: string, private level: string, private stacktrace: string[] = []) {
  }

  static info(message: string): LogMessage {
    return new LogMessage(message, LogLevel.INFO);
  }

  static debug(message: string): LogMessage {
    return new LogMessage(message, LogLevel.DEBUG);
  }

  static warn(message: string): LogMessage {
    return new LogMessage(message, LogLevel.WARN);
  }

  static error(message: string, stacktrace: string[] = []): LogMessage {
    return new LogMessage(message, LogLevel.ERROR, stacktrace);
  }
}

enum LogLevel {
  INFO = 'info',
  DEBUG = 'debug',
  WARN = 'warn',
  ERROR = 'error'
}
