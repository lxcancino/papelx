import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './store/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer), EffectsModule.forFeature([AuthEffects])]
})
export class AuthModule {}
