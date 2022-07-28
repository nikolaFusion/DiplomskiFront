import { TravelPlaceService } from './../../../services/travel-place.service';
import { TravelPlaceApiService } from './../../../services/api-services/travel-place-api.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { FindGroupArrModel } from 'src/app/models/find-group-arr';
import { LoginPopUpComponent } from '../login-pop-up/login-pop-up.component';
import { InfoPopUpComponent } from '../info-pop-up/info-pop-up.component';
import { SaveModel } from 'src/app/models/save.model';

@Component({
  selector: 'app-arrangement-pop-up',
  templateUrl: './arrangement-pop-up.component.html',
  styleUrls: ['./arrangement-pop-up.component.scss'],
})
export class ArrangementPopUpComponent implements OnInit {
  spinnerVisiable = false;
  saveMod = new SaveModel();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FindGroupArrModel,
    private authService: AuthService,
    private placeService: TravelPlaceService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ArrangementPopUpComponent>
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
    this.saveMod.IDs = new Array<number>();
    this.saveMod.price = this.data.price;
    this.data.arrangements.forEach((x) => {
      this.saveMod.IDs.push(x.arrangementID);
    });

    this.placeService.SaveArrangement(this.saveMod).subscribe();

    this.OpenInfoText();

    this.dialogRef.close();
  }
}
