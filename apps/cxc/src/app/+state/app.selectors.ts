import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  APPLICATION_FEATURE_KEY,
  ApplicationState,
  ApplicationPartialState
} from './app.reducer';

export const getAppState = createFeatureSelector<ApplicationState>(
  APPLICATION_FEATURE_KEY
);

export const getLoading = createSelector(
  getAppState,
  (state: ApplicationState) => state.loading
);
export const getAppInfo = createSelector(
  getAppState,
  state => {
    return { title: state.title, description: state.description };
  }
);
export const getMainNavigation = createSelector(
  getAppState,
  state => state.mainNavigation
);
