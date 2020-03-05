import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Authenticate } from '../models/auth-models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  constructor(@Inject('API_URL') private apiUrl, private http: HttpClient) {
    console.log('Inected Url: ', apiUrl);
  }

  isLoggedIn(): Observable<boolean> {
    return this._isLoggedIn$.asObservable().pipe();
  }

  authenticated() {
    return of(true);
  }

  authrize(auth: Authenticate) {
    console.log('Authtenticate: ', auth);
    const url = `${this.apiUrl}/login`;
    return this.http
      .post<any>(url, auth)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
