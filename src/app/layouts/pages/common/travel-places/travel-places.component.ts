import { TravelPlaceService } from './../../../../services/travel-place.service';
import { TravelPlaceModel } from './../../../../models/travel-place.model';
import { TravelPlaceApiService } from './../../../../services/api-services/travel-place-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-places',
  templateUrl: './travel-places.component.html',
  styleUrls: ['./travel-places.component.scss'],
})
export class TravelPlacesComponent implements OnInit {
  travelPlacesList = new Array<TravelPlaceModel>();
  searchValue: string;

  constructor(
    private travelPlaceApiService: TravelPlaceApiService,
    private placeService: TravelPlaceService
  ) {}

  ngOnInit() {
    this.travelPlaceApiService.GetAll().subscribe((d) => {
      this.travelPlacesList = d;
    });
  }

  public SearchTravelPlaces() {
    this.placeService.GetFindPlaces(this.searchValue).subscribe((d) => {
      this.travelPlacesList = d;
    });
  }
}
