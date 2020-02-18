import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing';
import { MainPageModule } from './main-page/main-page.module';

import { CoreModule } from './core/core.moduel';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    MainPageModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
