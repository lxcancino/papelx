import { createReducer, on, Action } from '@ngrx/store';
import { NavItem } from '@papelx/models';

export const APPLICATION_FEATURE_KEY = 'application';

export interface ApplicationState {
  title: string;
  description: string;
  loading: boolean;
  mainNavigation: NavItem[];
}

export interface ApplicationPartialState {
  readonly [APPLICATION_FEATURE_KEY]: ApplicationState;
}

export const initialState: ApplicationState = {
  title: 'CxC',
  description: 'Sistema de Cuentas por Cobrar',
  loading: false,
  mainNavigation: [
    {
      path: 'credito',
      name: 'credito',
      label: 'Crédito',
      description: 'Cartéra de crédito'
    },
    {
      path: 'contado',
      name: 'contado',
      label: 'Contado',
      description: 'Cartéra de contado'
    },
    {
      path: '/cheques',
      name: 'cheques',
      label: 'Cheques',
      description: 'Cartéra de Cheques devueltos'
    }
  ]
};

const applicationReducer = createReducer(initialState);

export function reducer(state: ApplicationState | undefined, action: Action) {
  return applicationReducer(state, action);
}
