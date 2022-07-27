import { ApplicationsRoutes } from './routes-resolver/routes-const.service';
import { AppUserModel } from './../models/appUser.model';
import { UserApiService } from './api-services/user-api.service';
import {
  catchError,
  Observable,
  of,
  finalize,
  BehaviorSubject,
  map,
} from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userInfo: AppUserModel;
  public initialObservable: Observable<boolean>;
  token: string;

  constructor(private router: Router, private userApiService: UserApiService) {}

  logout() {
    this.token = null;
    localStorage.removeItem('token');
    this.router.navigate([ApplicationsRoutes.HomeFinding]);
  }

  getToken(): string {
    return this.token;
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }

  initService() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token').toString();
    }

    this.userApiService.getLoggedInUser().subscribe((x) => {
      this._userInfo = x;
    });

    // this.initialObservable = this.getInitialAuthObservable().pipe(
    //   catchError((x) => {
    //     return of(true);
    //   }),
    //   finalize(() => {
    //     this.initialObservable = new BehaviorSubject<boolean>(true);
    //   })
    // );
  }

  private getInitialAuthObservable(): Observable<boolean> {
    if (this.isAuthenticated()) {
      return this.getUserData();
    }
    return of(true);
  }

  isAuthenticated(): boolean {
    if (this.token) {
      return true;
    }
    return false;
  }

  isAuthorized(): boolean {
    return this._userInfo != null;
  }

  getUserData(): Observable<boolean> {
    return this.userApiService.getLoggedInUser().pipe(
      map((x) => {
        this._userInfo = x;
        return true;
      })
    );
  }
}
