import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsRoutes {
  public static readonly Home = 'home';
  get Home(): string {
    return this.Home;
  }

  public static readonly HomeFinding = 'home-finding';
  get Login(): string {
    return this.Login;
  }

  public static readonly TravelPlaces = 'places';
  get TravelPlaces(): string {
    return this.TravelPlaces;
  }
}
