import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaingPageComponent } from './main-page/maing-page.component';
import { MainPageModule } from './main-page/main-page.module';
import { AuthGuard } from '@papelx/auth';

const routes: Routes = [
  {
    path: '',
    component: MaingPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'credito',
        loadChildren: () =>
          import('./features/credito/credito.module').then(
            m => m.CreditoModule
          ),
        canActivate: [AuthGuard]
      },
      {
        path: 'clientes',
        loadChildren: () =>
          import('./clientes-page/clientes-page.module').then(
            m => m.ClientesPageModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [
    MainPageModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
