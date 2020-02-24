import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders
} from '@angular/core';

import { throwIfAlreadyLoaded } from '@papelx/utils';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, AUTH_FEATURE_KEY } from './+store';

import { COMPONENTS } from './components';

/** TODO Implement angular-jwt in this module */
// import { } from '@auth0/angular-jwt';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    StoreModule.forFeature(AUTH_FEATURE_KEY, reducers),
    EffectsModule.forFeature([])
  ]
})
export class AuthModule {
  static forRoot(options: any): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: []
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: AuthModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'AuthModule');
  }
}
