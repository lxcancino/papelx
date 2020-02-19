import { Optional, SkipSelf, NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import * as fromApp from './app.reducer';
import { environment } from '../../environments/environment';

import { throwIfAlreadyLoaded } from '@papelx/utils';

@NgModule({
  imports: [
    StoreModule.forRoot(
      {
        router: routerReducer,
        application: fromApp.reducer
      },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot()
  ]
})
export class AppStateModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: AppStateModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'AppStateModule');
  }
}
