import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './authorization.selectors';

export const authFeatureKey = 'auth';

export interface State {
  isLoggedIn: boolean;
}

export const initialState: State = {
  isLoggedIn: false
};

const authReducer = createReducer(initialState);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
