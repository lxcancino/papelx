import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuthrization from './authorization.reducer';

export const selectAuthState = createFeatureSelector<fromAuthrization.State>(
  fromAuthrization.authFeatureKey
);
