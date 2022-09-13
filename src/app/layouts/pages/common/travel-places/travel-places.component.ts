import { MatDialog } from '@angular/material/dialog';
import { pipe } from 'rxjs';
import { TravelPlaceService } from './../../../../services/travel-place.service';
import { TravelPlaceModel } from './../../../../models/travel-place.model';
import { TravelPlaceApiService } from './../../../../services/api-services/travel-place-api.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { InfoPopUpComponent } from 'src/app/layouts/widgets/info-pop-up/info-pop-up.component';

@Component({
  selector: 'app-travel-places',
  templateUrl: './travel-places.component.html',
  styleUrls: ['./travel-places.component.scss'],
})
export class TravelPlacesComponent implements OnInit {
  travelPlacesList = new Array<TravelPlaceModel>();
  searchValue: string;
  spinnerVisiable = true;
  page = 1;
  numberOfPlaces: number;
  travelPlacePartList = new Array<TravelPlaceModel>();

  constructor(
    private travelPlaceApiService: TravelPlaceApiService,
    private placeService: TravelPlaceService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.travelPlaceApiService.GetAll().subscribe((d) => {
      this.travelPlacesList = d;
      this.travelPlacePartList = this.travelPlacesList.slice(0, 5);
      this.numberOfPlaces = this.travelPlacesList.length;
      this.spinnerVisiable = false;
    });
  }

  public SearchTravelPlaces() {
    this.placeService.GetFindPlaces(this.searchValue).subscribe((d) => {
      this.travelPlacesList = d;
      this.travelPlacePartList = this.travelPlacesList.slice(0, 5);
      this.numberOfPlaces = this.travelPlacesList.length;
      if (this.numberOfPlaces == 0) {
        this.dialog.open(InfoPopUpComponent, {
          height: '200px',
          width: '300px',
          data: 'There is no matching data for the given data',
        });
      }
      this.spinnerVisiable = false;
    });
  }

  public OnPageChange(event: PageEvent): void {
    this.page = event.pageIndex;
    this.travelPlacePartList = this.travelPlacesList.slice(
      0 + this.page * 5,
      5 + this.page * 5
    );
  }
}
