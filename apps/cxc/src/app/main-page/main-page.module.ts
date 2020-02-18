import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaingPageComponent } from './maing-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { UIModule } from '@papelx/ui';

@NgModule({
  declarations: [MaingPageComponent],
  imports: [
    UIModule,
    CommonModule,
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports: [MaingPageComponent]
})
export class MainPageModule {}
