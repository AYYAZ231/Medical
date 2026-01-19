import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

console.log('Main.ts: Starting bootstrap...');
platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => console.log('Main.ts: Bootstrap successful'))
  .catch(err => console.error('Main.ts: Bootstrap failed', err));
