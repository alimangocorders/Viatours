import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router'; // Import withInMemoryScrolling

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      // This configuration fixes the "staying at the bottom" issue
      withInMemoryScrolling({
        scrollPositionRestoration: 'top'
      })
    )
  ]
};
