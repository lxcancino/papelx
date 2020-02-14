import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { ClientesPageComponent } from './clientes-page.component';

const routes: Route[] = [{ path: '', component: ClientesPageComponent }];

@NgModule({
  declarations: [ClientesPageComponent],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)]
})
export class ClientesPageModule {}
