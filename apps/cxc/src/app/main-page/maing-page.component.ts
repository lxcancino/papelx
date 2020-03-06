import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { AppFacade } from '../+state/app.facade';
import { AuthService } from '@papelx/auth';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'papelx-maing-page',
  templateUrl: './maing-page.component.html',
  styleUrls: ['./maing-page.component.scss']
})
export class MaingPageComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  @ViewChild('drawer', { static: false })
  drawer: MatSidenav;

  constructor(
    private breakpointObserver: BreakpointObserver,
    readonly appFacade: AppFacade,
    readonly authService: AuthService
  ) {}

  ngOnInit() {}

  login() {
    this.authService
      .authrize({ username: 'admin3', password: 'admin3' })
      .subscribe(res => console.log('Loggedin: ', res));
  }
}
