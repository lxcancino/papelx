import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';
import * as fromApp from './app.reducer';
import * as AppSelectors from './app.selectors';

@Injectable({ providedIn: 'root' })
export class AppFacade {
  appInfo$ = this.store.pipe(select(AppSelectors.getAppInfo));
  navigation$ = this.store.pipe(select(AppSelectors.getMainNavigation));
  constructor(private readonly store: Store<fromApp.ApplicationState>) {}
}
