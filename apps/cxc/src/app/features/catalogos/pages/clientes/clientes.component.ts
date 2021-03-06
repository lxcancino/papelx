import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  LOCALE_ID
} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { formatCurrency, formatDate } from '@angular/common';
import {
  GridOptions,
  GridApi,
  ColDef,
  GridReadyEvent,
  RowDoubleClickedEvent,
  ColumnApi
} from 'ag-grid-community';

@Component({
  selector: 'papelx-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientesComponent implements OnInit {
  columnDefs: ColDef[] = [
    { headerName: 'Cliente', field: 'nombre' },
    { headerName: 'Clave', field: 'clave' },
    { headerName: 'RFC', field: 'rfc' },
    {
      headerName: 'Credito',
      field: 'credito',
      valueFormatter: params => (params.value ? 'SI' : 'NO')
    },
    {
      headerName: 'Línea',
      field: 'credito',
      // valueGetter: params => params.getValue('credito'),
      valueFormatter: params =>
        params.value ? this.transformCurrency(params.value.lineaDeCredito) : ''
    }
  ];

  rowData$: Observable<any>;

  constructor(
    private http: HttpClient,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  ngOnInit(): void {
    const params = new HttpParams().set('tipo', 'CREDITO');
    this.rowData$ = this.http.get<any>('http://localhost:8080/api/clientes', {
      params
    });
    this.rowData$.subscribe(data => console.log(data));
  }

  transformCurrency(data: any) {
    return formatCurrency(data, this.locale, '$');
  }
}
