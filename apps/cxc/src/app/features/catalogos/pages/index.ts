import { ClientesComponent } from './clientes/clientes.component';
import { VendedoresComponent } from './vendedores/vendedores.component';
import { CobradoresComponent } from './cobradores/cobradores.component';
import { AbogadosComponent } from './abogados/abogados.component';

export const CATALOGOS_PAGES: any[] = [
  ClientesComponent,
  VendedoresComponent,
  CobradoresComponent,
  AbogadosComponent
];

export * from './clientes/clientes.component';
export * from './vendedores/vendedores.component';
export * from './cobradores/cobradores.component';
export * from './abogados/abogados.component';
