import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

import { UIModule } from '@papelx/ui';
import { CatalogosComponent } from './catalogos.component';
import * as fromPages from './pages';

import { AgGridModule } from 'ag-grid-angular';

const routes: Route[] = [
  {
    path: '',
    component: CatalogosComponent,
    children: [
      { path: 'clientes', component: fromPages.ClientesComponent },
      { path: 'vendedores', component: fromPages.VendedoresComponent },
      { path: 'cobradores', component: fromPages.CobradoresComponent },
      { path: 'abogados', component: fromPages.AbogadosComponent }
    ]
  }
];

@NgModule({
  declarations: [CatalogosComponent, ...fromPages.CATALOGOS_PAGES],
  imports: [
    UIModule,
    MatSidenavModule,
    AgGridModule.withComponents([]),
    RouterModule.forChild(routes)
  ]
})
export class CatalogosModule {}
