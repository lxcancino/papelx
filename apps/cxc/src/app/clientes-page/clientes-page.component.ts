import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'papelx-clientes-page',
  templateUrl: './clientes-page.component.html',
  styleUrls: ['./clientes-page.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientesPageComponent implements OnInit {
  data: any[];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any[]>('http://10.10.1.229:9095/siipapx/api/productos')
      .subscribe(
        data => (this.data = data),
        error => console.error('Error: ', error)
      );
  }
}
