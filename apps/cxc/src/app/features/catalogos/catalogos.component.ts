import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { map, takeUntil, shareReplay } from 'rxjs/operators';

import { NavItem } from '@papelx/models';
import { BaseComponent } from '@papelx/xcore';

@Component({
  selector: 'papelx-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogosComponent extends BaseComponent implements OnInit {
  navigation: NavItem[] = [
    {
      name: 'clientes',
      label: 'Clientes',
      icon: 'people',
      description: 'Catálogo de clientes',
      path: 'clientes'
    },
    {
      name: 'cobradores',
      label: 'Cobradores',
      description: 'Catálogo de cobradores',
      path: 'cobradores',
      icon: 'directions_run'
    },
    {
      name: 'vendedores',
      label: 'Vendedores',
      description: 'Catálogo de vendedores',
      path: 'vendedores',
      icon: 'person_pin_circle'
    },
    {
      name: 'abogados',
      label: 'Abogados',
      description: 'Despacho de abogados',
      path: 'abogados',
      icon: 'menu_book'
    }
  ];
  drawerOpenned = true;
  drawerMode: 'side' | 'push' | 'over' = 'side';
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  isHandset: boolean;

  @ViewChild('drawer', { static: false })
  drawer: MatSidenav;
  constructor(private breakpointObserver: BreakpointObserver) {
    super();
  }

  ngOnInit(): void {
    this.isHandset$.pipe(takeUntil(this.destroy$)).subscribe(v => {
      this.isHandset = v;
    });
  }

  getMode() {
    if (this.isHandset) {
      return 'over';
    } else {
      return this.drawerMode;
    }
  }
}
