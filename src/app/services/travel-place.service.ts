import { map, mergeMap } from 'rxjs/operators';
import { TravelPlaceApiService } from './api-services/travel-place-api.service';
import { Injectable } from '@angular/core';
import { TravelPlaceModel } from '../models/travel-place.model';
import { Observable } from 'rxjs';
import { ArrangemantsModel } from '../models/arrangemants.model';
import { ArangmantApiService } from './api-services/arangmant-api.service';
import { FindGroupArrModel } from '../models/find-group-arr';

@Injectable({
  providedIn: 'root',
})
export class TravelPlaceService {
  constructor(
    private travelApiService: TravelPlaceApiService,
    private arrangementApiService: ArangmantApiService
  ) {}

  SaveArrangement(data: FindGroupArrModel): Observable<boolean> {
    return this.travelApiService.SaveArrangement(data);
  }

  public GetFindPlaces(searchValue: string): Observable<TravelPlaceModel[]> {
    return this.travelApiService.GetFindPlaces(searchValue);
  }

  public GetByID(id: string): Observable<TravelPlaceModel> {
    return this.travelApiService.GetById(id);
  }

  public GetArrangementByTPId(
    id: string
  ): Observable<Array<ArrangemantsModel>> {
    return this.arrangementApiService.GetArrangementByTPId(id);
  }
}
