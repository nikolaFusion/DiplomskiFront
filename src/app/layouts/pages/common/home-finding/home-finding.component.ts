import { ArangmantApiService } from './../../../../services/api-services/arangmant-api.service';
import { TravelFindModel } from './../../../../models/travel-find-model';
import { TravelPlaceModel } from 'src/app/models/travel-place.model';
import { Component, OnInit } from '@angular/core';
import { FindGroupArrModel } from 'src/app/models/find-group-arr';
import { ArrangemantsModel } from 'src/app/models/arrangemants.model';

@Component({
  selector: 'app-home-finding',
  templateUrl: './home-finding.component.html',
  styleUrls: ['./home-finding.component.scss'],
})
export class HomeFindingComponent implements OnInit {
  travelPlaceChoiseList = new Array<TravelPlaceModel>();
  findedArrangements: Array<FindGroupArrModel>;
  constructor(private aranService: ArangmantApiService) {}

  ngOnInit() {}

  public addTravelPlace(event: TravelPlaceModel): void {
    if (this.travelPlaceChoiseList.includes(event)) {
      return;
    }
    this.travelPlaceChoiseList.push(event);
  }

  public CheckAvailability(event: TravelFindModel): void {
    event.travelPlaceList = this.travelPlaceChoiseList.map(
      (x) => x.travelPlaceID
    );

    this.aranService.GetFindArr(event).subscribe((d) => {
      this.findedArrangements = d;
      console.log(this.findedArrangements);
    });
  }

  public deleteItem(item: TravelPlaceModel) {
    this.travelPlaceChoiseList.forEach((element, index) => {
      if (element == item) this.travelPlaceChoiseList.splice(index, 1);
    });
  }
}
