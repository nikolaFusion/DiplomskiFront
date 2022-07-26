import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { TravelFindModel } from 'src/app/models/travel-find-model';
import { FindGroupArrModel } from 'src/app/models/find-group-arr';
import { ArrangemantsModel } from 'src/app/models/arrangemants.model';

@Injectable({
  providedIn: 'root',
})
export class ArangmantApiService {
  baseUrl = 'https://localhost:7116/arrangment';
  constructor(private http: HttpClient) {}

  public GetFindArr(
    travelFindModel: TravelFindModel
  ): Observable<FindGroupArrModel[]> {
    return this.http.post<FindGroupArrModel[]>(
      `${this.baseUrl}/find-arrangments`,
      travelFindModel
    );
  }

  public GetArrangementByTPId(id: string): Observable<ArrangemantsModel[]> {
    return this.http.get<ArrangemantsModel[]>(
      `${this.baseUrl}/all-arrangement/${id}`
    );
  }
}
