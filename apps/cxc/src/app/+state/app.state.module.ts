import { Optional, SkipSelf, NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromApp from './app.reducer';

import { throwIfAlreadyLoaded } from '@papelx/utils';

@NgModule({
  imports: [
    StoreModule.forFeature(fromApp.APPLICATION_FEATURE_KEY, fromApp.reducer),
    EffectsModule.forFeature([])
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
