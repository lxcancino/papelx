import { createReducer, on, Action } from '@ngrx/store';

export const APPLICATION_FEATURE_KEY = 'application';

export interface ApplicationState {
  title: string;
  description: string;
  loading: boolean;
}

export interface ApplicationPartialState {
  readonly [APPLICATION_FEATURE_KEY]: ApplicationState;
}

export const initialState: ApplicationState = {
  title: 'CxC',
  description: 'Sistema de Cuentas por Cobrar',
  loading: false
};

const applicationReducer = createReducer(initialState);

export function reducer(state: ApplicationState | undefined, action: Action) {
  return applicationReducer(state, action);
}
