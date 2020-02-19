import { Optional, SkipSelf, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { throwIfAlreadyLoaded } from '@papelx/utils';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, BrowserModule, HttpClientModule]
})
export class XcoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: XcoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'XcoreModule');
  }
}
