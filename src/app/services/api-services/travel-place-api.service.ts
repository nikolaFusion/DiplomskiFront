import { SaveModel } from './../../models/save.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TravelPlaceModel } from 'src/app/models/travel-place.model';
import { ArrangemantsModel } from 'src/app/models/arrangemants.model';
import { FindGroupArrModel } from 'src/app/models/find-group-arr';

@Injectable({
  providedIn: 'root',
})
export class TravelPlaceApiService {
  baseUrl = 'https://localhost:7116/travel-places';
  baseUrlArrGroup = 'https://localhost:7116/arrangment-group';

  constructor(private http: HttpClient) {}

  public GetAll() {
    return this.http.get<Array<TravelPlaceModel>>(`${this.baseUrl}`);
  }

  GetMyArrangements(): Observable<FindGroupArrModel[]> {
    return this.http.get<Array<FindGroupArrModel>>(
      `${this.baseUrlArrGroup}/my-arrangements`
    );
  }

  SaveArrangement(data: SaveModel): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrlArrGroup}/save`, data);
  }

  GetFindPlaces(searchValue: string): Observable<TravelPlaceModel[]> {
    return this.http.get<Array<TravelPlaceModel>>(
      `${this.baseUrl}/find-place/${searchValue}`
    );
  }

  GetById(id: string): Observable<TravelPlaceModel> {
    return this.http.get<TravelPlaceModel>(
      `${this.baseUrl}/travel-place/${id}`
    );
  }
}
