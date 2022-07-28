import { map, mergeMap } from 'rxjs/operators';
import { InfoPopUpComponent } from './../../widgets/info-pop-up/info-pop-up.component';
import { UserApiService } from 'src/app/services/api-services/user-api.service';
import { AppUserModel } from 'src/app/models/appUser.model';
import { TravelPlaceService } from './../../../services/travel-place.service';
import { Component, OnInit } from '@angular/core';
import { FindGroupArrModel } from 'src/app/models/find-group-arr';
import { MatDialog } from '@angular/material/dialog';
import { concat, forkJoin } from 'rxjs';

@Component({
  selector: 'app-my-arrangements-group',
  templateUrl: './my-arrangements-group.component.html',
  styleUrls: ['./my-arrangements-group.component.scss'],
})
export class MyArrangementsGroupComponent implements OnInit {
  arrangementGroups = new Array<FindGroupArrModel>();
  visiableSpinner = true;
  user: AppUserModel;

  constructor(
    private travelService: TravelPlaceService,
    private userApiService: UserApiService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.visiableSpinner = true;
    this.travelService.GetMyArrangements().subscribe((x) => {
      this.arrangementGroups = x;
      this.visiableSpinner = false;
    });
    this.visiableSpinner = true;
    this.userApiService.getLoggedInUser().subscribe((x) => {
      this.visiableSpinner = true;
      this.user = x;
      this.visiableSpinner = false;
    });
  }

  public deleteArrGroup(findGrArr: FindGroupArrModel) {
    this.visiableSpinner = true;

    this.travelService
      .DeleteArrGroup(findGrArr.arrangementGroupID)
      .pipe(
        map((x1: boolean) => {
          this.dialog.open(InfoPopUpComponent, {
            height: '200px',
            width: '300px',
            data: 'You have successfully deleted the arrangements',
          });
          this.travelService.GetMyArrangements().subscribe((x) => {
            this.arrangementGroups = x;
            this.visiableSpinner = false;
          });
        })
      )
      .subscribe();
  }
}
