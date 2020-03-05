import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromAuthorization from './authorization';

export const AUTH_FEATURE_KEY = 'auth';

export interface State {
  authroization: fromAuthorization.State;
}

export const reducers: ActionReducerMap<State> = {
  authroization: fromAuthorization.reducer
};

export const getState = createFeatureSelector<State>(AUTH_FEATURE_KEY);
