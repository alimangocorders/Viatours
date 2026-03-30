import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        // This is the correct set of properties for modern Angular
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      }),
      withComponentInputBinding()
    )
  ]
};
