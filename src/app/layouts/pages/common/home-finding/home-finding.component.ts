import { TravelPlaceModel } from 'src/app/models/travel-place.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-finding',
  templateUrl: './home-finding.component.html',
  styleUrls: ['./home-finding.component.scss'],
})
export class HomeFindingComponent implements OnInit {
  travelPlaceChoiseList = new Array<TravelPlaceModel>();
  constructor() {}

  ngOnInit() {}

  public addTravelPlace(event: TravelPlaceModel): void {
    if (this.travelPlaceChoiseList.includes(event)) {
      return;
    }
    this.travelPlaceChoiseList.push(event);
  }
}
