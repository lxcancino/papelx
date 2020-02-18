import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavItem } from '@papelx/models';

@Component({
  selector: 'papelx-maing-page',
  templateUrl: './maing-page.component.html',
  styleUrls: ['./maing-page.component.scss']
})
export class MaingPageComponent {
  navigation: NavItem[] = [
    {
      path: 'credito',
      name: 'credito',
      label: 'Crédito',
      description: 'Cartéra de crédito'
    },
    {
      path: 'contado',
      name: 'contado',
      label: 'Contado',
      description: 'Cartéra de contado'
    },
    {
      path: '/cheques',
      name: 'cheques',
      label: 'Cheques',
      description: 'Cartéra de Cheques devueltos'
    }
  ];
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
