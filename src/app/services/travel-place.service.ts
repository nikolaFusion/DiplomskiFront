import { map, mergeMap } from 'rxjs/operators';
import { TravelPlaceApiService } from './api-services/travel-place-api.service';
import { Injectable } from '@angular/core';
import { TravelPlaceModel } from '../models/travel-place.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TravelPlaceService {
  constructor(private travelApiService: TravelPlaceApiService) {}

  public GetFindPlaces(searchValue: string): Observable<TravelPlaceModel[]> {
    return this.travelApiService.GetFindPlaces(searchValue);
  }
}
