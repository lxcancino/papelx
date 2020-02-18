import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaingPageComponent } from './main-page/maing-page.component';
import { MainPageModule } from './main-page/main-page.module';

const routes: Routes = [
  {
    path: '',
    component: MaingPageComponent,
    children: [
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
