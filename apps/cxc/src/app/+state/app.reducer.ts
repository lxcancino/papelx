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
  title: 'SIIPAPX CxC',
  description: 'Módulo de Cuentas por Cobrar de SIIPAPX',
  loading: false,
  mainNavigation: [
    {
      path: '/credito',
      name: 'credito',
      label: 'Crédito',
      description: 'Cartéra de crédito'
    },
    {
      path: '/contado',
      name: 'contado',
      label: 'Contado',
      description: 'Cartéra de contado'
    },
    {
      path: '/cheques',
      name: 'cheques',
      label: 'Cheques',
      description: 'Cartéra de Cheques devueltos'
    },
    {
      path: '/catalogos',
      name: 'catalogos',
      label: 'Catálogos',
      description: 'Mantenimiento a catálogos del Cuentas por cobrar'
    }
  ]
};

const applicationReducer = createReducer(initialState);

export function reducer(state: ApplicationState | undefined, action: Action) {
  return applicationReducer(state, action);
}
