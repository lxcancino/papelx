import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing';
import { CoreModule } from './core/core.moduel';
import { AppStateModule } from './+state/app.state.module';
import { AuthModule } from '@papelx/auth';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    AppStateModule,
    AuthModule
  ],
  providers: [{ provide: 'API_URL', useValue: environment.apiUrl }],
  bootstrap: [AppComponent]
})
export class AppModule {}
