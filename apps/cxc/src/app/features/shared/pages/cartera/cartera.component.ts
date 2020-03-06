import { Component, OnInit } from '@angular/core';

import { BaseCarteraComponent } from '../base-cartera/base-cartera.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'papelx-cartera',
  template: `
    <div>
      <h1>Resumen de la Cartera ({{ cartera.nombre }})</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
        laudantium, distinctio corrupti modi neque accusamus blanditiis. Natus
        eaque, praesentium laudantium inventore beatae, facilis tempore pariatur
        ut at aut accusantium iusto.
      </p>
    </div>
  `
})
export class CarteraComponent extends BaseCarteraComponent implements OnInit {
  constructor(route: ActivatedRoute) {
    super(route);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
