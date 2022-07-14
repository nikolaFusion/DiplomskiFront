import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of, mergeMap, pipe, map } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.initialObservable.pipe(
      mergeMap(() => {
        if (!this.authService.isAuthenticated()) {
          return of(false);
        }
        if (!this.authService.isAuthorized()) {
          return this.authService.getUserData().pipe(
            map((x) => {
              return true;
            })
          );
        }
        return of(true);
      })
    );
  }
}
