import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

import { Observable } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';
import { NavItem } from '@papelx/models';
import { BaseComponent } from '@papelx/xcore';

@Component({
  selector: 'papelx-credito-page',
  templateUrl: './credito-page.component.html',
  styleUrls: ['./credito-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreditoPageComponent extends BaseComponent implements OnInit {
  navigation: NavItem[] = [
    {
      name: 'cartera',
      label: 'Cartera',
      icon: 'list',
      description: 'Cartera de Crédito',
      path: 'cartera'
    },
    {
      name: 'facturas',
      label: 'Facturas',
      description: 'Facturas',
      path: 'facturas'
    },
    {
      name: 'cobros',
      label: 'Cobranza',
      description: 'Registro y aplicación de cobros',
      path: 'cobros'
    },
    {
      name: 'recibos',
      label: 'Recibos CFDIs',
      description: 'Recibos electrónicos de pago',
      path: 'recibos',
      icon: 'bookmarks'
    },
    {
      name: 'revision',
      label: 'Revisión',
      description: 'Control envio de revisiones y cobro',
      path: 'revision'
    },
    {
      name: 'devoluciones',
      label: 'Devoluciones',
      description: 'Notas de crédito de devolución',
      path: 'devoluciones'
    },
    {
      name: 'bonoficiaciones',
      label: 'Bonificaciones',
      description: 'Registro de notas de crédito por Bonificación y Descuento',
      path: 'bonificaciones'
    },
    {
      name: 'cargos',
      label: 'Notas de Cargo',
      description: 'Administración de notas de cargo',
      path: 'cargos'
    },
    {
      name: 'comisiones',
      label: 'Comisiones',
      description: 'Administración y calculo de comisiones a cobradores',
      path: 'comisiones'
    }
  ];

  catalogos: NavItem[] = [
    {
      name: 'operadores',
      label: 'Operadores',
      path: 'operadores',
      icon: 'users'
    },
    {
      name: 'cobradores',
      label: 'Cobradores',
      path: 'cobradores',
      icon: 'info-circle'
    },
    {
      name: 'vendedores',
      label: 'Vendedores',
      path: 'vendedores',
      icon: 'shopping-cart'
    },
    { name: 'abogados', label: 'Abogados', path: 'abogados', icon: 'book' }
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
