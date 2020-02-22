import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(@Inject('API_URL') private apiUrl) {
    console.log('Inected Url: ', apiUrl);
  }

  isLoggedIn() {
    console.log('Logged with URL: ', this.apiUrl);
  }
}
