import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CreditoPageComponent } from './credito-page/credito-page.component';
import { UIModule } from '@papelx/ui';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';

export const routes: Routes = [
  {
    path: '',
    component: CreditoPageComponent,
    children: [
      // { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [
    UIModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatGridListModule
  ],
  declarations: [CreditoPageComponent]
})
export class CreditoModule {}
