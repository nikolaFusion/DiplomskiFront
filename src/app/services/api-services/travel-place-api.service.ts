import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TravelPlaceModel } from 'src/app/models/travel-place.model';

@Injectable({
  providedIn: 'root',
})
export class TravelPlaceApiService {
  baseUrl = 'https://localhost:7116/travel-places';
  constructor(private http: HttpClient) {}

  public GetAll(): Observable<Array<TravelPlaceModel>> {
    return this.http.get<Array<TravelPlaceModel>>(`${this.baseUrl}`);
  }
}
