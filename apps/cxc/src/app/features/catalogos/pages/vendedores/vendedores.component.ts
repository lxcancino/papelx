import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'papelx-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VendedoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
