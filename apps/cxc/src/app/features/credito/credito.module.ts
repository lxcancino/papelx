import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CreditoPageComponent } from './credito-page/credito-page.component';
import { UIModule } from '@papelx/ui';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { CxCSharedModule } from '../shared/shared.moduel';
import * as fromPages from '../shared/pages';

export const routes: Routes = [
  {
    path: '',
    component: CreditoPageComponent,
    data: { cartera: { clave: 'CRE', nombre: 'Crédito' } },
    children: [
      { path: '', redirectTo: 'cartera' },
      {
        path: 'cartera',
        component: fromPages.CarteraComponent
      },
      { path: 'facturas', component: fromPages.FacturasComponent },
      { path: 'cobros', component: fromPages.CobranzaComponent },
      { path: 'recibos', component: fromPages.RecibosCreComponent },
      { path: 'revision', component: fromPages.RevisionComponent },
      { path: 'devoluciones', component: fromPages.DevolucionesComponent },
      { path: 'bonificaciones', component: fromPages.BonificacionesComponent },
      { path: 'cargos', component: fromPages.CargosComponent },
      { path: 'comisiones', component: fromPages.ComisionesComponent }
    ]
  }
];

@NgModule({
  imports: [
    UIModule,
    CxCSharedModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatGridListModule,
    MatExpansionModule
  ],
  declarations: [CreditoPageComponent]
})
export class CreditoModule {}
