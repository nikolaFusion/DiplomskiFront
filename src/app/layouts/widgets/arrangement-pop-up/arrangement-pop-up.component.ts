import { TravelPlaceService } from './../../../services/travel-place.service';
import { TravelPlaceApiService } from './../../../services/api-services/travel-place-api.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FindGroupArrModel } from 'src/app/models/find-group-arr';
import { LoginPopUpComponent } from '../login-pop-up/login-pop-up.component';
import { InfoPopUpComponent } from '../info-pop-up/info-pop-up.component';

@Component({
  selector: 'app-arrangement-pop-up',
  templateUrl: './arrangement-pop-up.component.html',
  styleUrls: ['./arrangement-pop-up.component.scss'],
})
export class ArrangementPopUpComponent implements OnInit {
  spinnerVisiable = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FindGroupArrModel,
    private authService: AuthService,
    private placeService: TravelPlaceService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {}

  public OpenLogInPopUp(): void {
    let dialogRef = this.dialog.open(LoginPopUpComponent, {
      height: '600px',
      width: '400px',
      data: false,
    });
  }

  public OpenInfoText(): void {
    let dialogRef = this.dialog.open(InfoPopUpComponent, {
      height: '200px',
      width: '400px',
      data: 'You have successfully saved the arrangement',
    });
  }
  Reserves() {
    if (!this.authService.isAuthorized()) {
      // this.OpenLogInPopUp();
    }

    this.placeService.SaveArrangement(this.data).subscribe();

    this.OpenInfoText();
  }
}
