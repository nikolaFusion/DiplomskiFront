import { UserApiService } from 'src/app/services/api-services/user-api.service';
import { AuthService } from 'src/app/services/auth.service';
import { ArrangementPopUpComponent } from './../../../widgets/arrangement-pop-up/arrangement-pop-up.component';
import { TravelPlaceApiService } from './../../../../services/api-services/travel-place-api.service';
import { ArangmantApiService } from './../../../../services/api-services/arangmant-api.service';
import { TravelFindModel } from './../../../../models/travel-find-model';
import { TravelPlaceModel } from 'src/app/models/travel-place.model';
import { Component, OnInit } from '@angular/core';
import { FindGroupArrModel } from 'src/app/models/find-group-arr';
import { ArrangemantsModel } from 'src/app/models/arrangemants.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home-finding',
  templateUrl: './home-finding.component.html',
  styleUrls: ['./home-finding.component.scss'],
})
export class HomeFindingComponent implements OnInit {
  travelPlacesList = new Array<TravelPlaceModel>();
  travelPlaceChoiseList = new Array<TravelPlaceModel>();
  findedArrangements: Array<FindGroupArrModel>;
  travelPlacePartList = new Array<TravelPlaceModel>();
  randomNum: number;
  numberOfFindArr = 0;
  spinnerVisiable = true;
  nullList = false;
  constructor(
    private aranService: ArangmantApiService,
    private travelPlaceApiService: TravelPlaceApiService,
    public dialog: MatDialog,
    private userApiService: UserApiService
  ) {}

  ngOnInit() {
    this.travelPlaceApiService.GetAll().subscribe((d) => {
      this.travelPlacesList = d;
      let random = Math.floor(
        Math.random() * (this.travelPlacesList.length - 6)
      );
      this.randomNum = random;
      this.travelPlacePartList = this.travelPlacesList.slice(
        random,
        random + 6
      );

      this.spinnerVisiable = false;
    });
  }

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
      this.numberOfFindArr = this.findedArrangements.length;
      if (this.numberOfFindArr == 0) {
        this.nullList = true;
      }
    });
  }

  public deleteItem(item: TravelPlaceModel) {
    this.travelPlaceChoiseList.forEach((element, index) => {
      if (element == item) this.travelPlaceChoiseList.splice(index, 1);
    });
  }

  public OpenRegistrationPopUp(arrGroup: FindGroupArrModel): void {
    let dialogRef = this.dialog.open(ArrangementPopUpComponent, {
      height: '800px',
      width: '1400px',
      data: arrGroup,
    });
  }
}
