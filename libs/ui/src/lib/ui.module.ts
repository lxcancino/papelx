import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

const MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  FlexLayoutModule
];

import { UI_COMPONENTS } from './components';

@NgModule({
  declarations: [...UI_COMPONENTS],
  imports: [...MODULES, MaterialModule],
  exports: [...MODULES, MaterialModule, ...UI_COMPONENTS]
})
export class UIModule {}
