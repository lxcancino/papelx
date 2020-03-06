import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from '@papelx/xcore';

export abstract class BaseCarteraComponent extends BaseComponent
  implements OnInit {
  public cartera: { clave: string; nombre: string };
  constructor(public route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.route.parent.data
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => (this.cartera = data.cartera));
  }
}
