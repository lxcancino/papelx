import { NgModule } from '@angular/core';

import { UIModule } from '@papelx/ui';
import { PAGES } from './pages';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [...PAGES],
  imports: [UIModule, MatGridListModule, MatSidenavModule, MatExpansionModule],
  exports: [...PAGES],
  providers: []
})
export class CxCSharedModule {}
