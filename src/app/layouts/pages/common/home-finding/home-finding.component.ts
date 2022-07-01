import { ArangmantApiService } from './../../../../services/api-services/arangmant-api.service';
import { TravelFindModel } from './../../../../models/travel-find-model';
import { TravelPlaceModel } from 'src/app/models/travel-place.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-finding',
  templateUrl: './home-finding.component.html',
  styleUrls: ['./home-finding.component.scss'],
})
export class HomeFindingComponent implements OnInit {
  travelPlaceChoiseList = new Array<TravelPlaceModel>();
  constructor(private aranService: ArangmantApiService) {}

  ngOnInit() {}

  public addTravelPlace(event: TravelPlaceModel): void {
    if (this.travelPlaceChoiseList.includes(event)) {
      return;
    }
    this.travelPlaceChoiseList.push(event);
  }

  public CheckAvailability(event: TravelFindModel): void {
    event.listOfPlaces = this.travelPlaceChoiseList;

    let li = new Array<TravelPlaceModel>();
    li.push(new TravelPlaceModel('', '', '', '', 4));
    li.push(new TravelPlaceModel('', '', '', '', 3));
    li.push(new TravelPlaceModel('', '', '', '', 5));
    li.push(new TravelPlaceModel('', '', '', '', 21));

    let event1 = new TravelFindModel(
      li,
      new Date(19, 9, 2022),
      new Date(28, 9, 2022),
      2
    );

    this.aranService.GetFindArr(event1).subscribe((d) => {
      console.log(d);
    });
  }
}
