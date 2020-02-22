import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from '@papelx/utils';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, AUTH_FEATURE_KEY } from './+store';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(AUTH_FEATURE_KEY, reducers),
    EffectsModule.forFeature([])
  ]
})
export class AuthModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: AuthModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'AuthModule');
  }
}
