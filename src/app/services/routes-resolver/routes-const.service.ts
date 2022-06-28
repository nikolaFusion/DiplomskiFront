import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsRoutes {
  public static readonly Home = 'home';
  get Home(): string {
    return this.Home;
  }

  public static readonly Login = 'login';
  get Login(): string {
    return this.Login;
  }
}
