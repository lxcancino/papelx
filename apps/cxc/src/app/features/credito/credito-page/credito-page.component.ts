import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NavItem } from '@papelx/models';

@Component({
  selector: 'papelx-credito-page',
  templateUrl: './credito-page.component.html',
  styleUrls: ['./credito-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreditoPageComponent implements OnInit {
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
      name: 'catalogos',
      label: 'Catálogos',
      collapsible: true,
      children: [
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
      ]
    }
  ];
  constructor() {
    console.log('Cartera de credito inicializada....');
  }

  ngOnInit(): void {}
}
