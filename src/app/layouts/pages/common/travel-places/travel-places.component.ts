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

  constructor(private travelPlaceApiService: TravelPlaceApiService) {}

  ngOnInit() {
    this.travelPlaceApiService.GetAll().subscribe((d) => {
      this.travelPlacesList = d;
      console.log(d);
    });
  }
}
