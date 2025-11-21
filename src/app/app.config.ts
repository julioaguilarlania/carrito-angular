import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG,
      //disableConsoleLogging: true
      //serverLogLevel: NgxLoggerLevel.ERROR,
      //serverLoggingUrl: 'http://localhost:8080/api/logs'
    }))
  ]
};
