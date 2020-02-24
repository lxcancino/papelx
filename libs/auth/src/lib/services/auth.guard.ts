import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router
} from '@angular/router';

import { AuthService } from './auth.service';
import { map, take, mergeMap, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('Source URL: ', state.url);
    return this.checkStoreAuthentication().pipe(
      mergeMap(storeAuth => {
        if (storeAuth) {
          return of(true);
        }
        return this.checkApiAuthentication();
      }),
      tap(vv => console.log('VV: ', vv)),
      map(storeOrApiAuth => {
        if (!storeOrApiAuth) {
          console.log('Not Logged in');
          this.router.navigate(['/']);
          return false;
        } else {
          return true;
        }
      })
    );
  }

  /**
   * Check that we have a valid authentication token
   */
  private checkStoreAuthentication(): Observable<boolean> {
    return this.authService.isLoggedIn().pipe(take(1));
  }

  /**
   * checks if the state matches authenticated on our AuthService (which we get from local storage).
   */
  private checkApiAuthentication(): Observable<boolean> {
    console.log('Check if AuthService r');
    return this.authService.authenticated();
  }
}
