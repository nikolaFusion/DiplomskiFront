import { TravelPlaceInfoComponent } from './../../layouts/pages/common/travel-place-info/travel-place-info.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsRoutes {
  public static readonly HomeFinding = 'home-finding';
  get Login(): string {
    return this.Login;
  }

  public static readonly TravelPlaces = 'places';
  get TravelPlaces(): string {
    return this.TravelPlaces;
  }

  public static readonly MyArrangement = 'my-arangements';
  get MyArrangement(): string {
    return this.MyArrangement;
  }

  public static readonly Arrangement = 'arrangement';
  get Arrangement(): string {
    return this.Arrangement;
  }

  public static readonly TravelPlacesInfo = 'travel-place-info';
  get TravelPlaceInfo(): string {
    return this.TravelPlaceInfo;
  }
}
