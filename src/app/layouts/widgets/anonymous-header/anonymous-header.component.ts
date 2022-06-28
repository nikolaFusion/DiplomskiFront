import { RegistrationPopUpComponent } from './../registration-pop-up/registration-pop-up.component';
import { LoginPopUpComponent } from './../login-pop-up/login-pop-up.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-anonymous-header',
  templateUrl: './anonymous-header.component.html',
  styleUrls: ['./anonymous-header.component.scss'],
})
export class AnonymousHeaderComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  public OpenLogInPopUp(): void {
    let dialogRef = this.dialog.open(LoginPopUpComponent, {
      height: '600px',
      width: '400px',
    });
  }

  public OpenRegistrationPopUp(): void {
    let dialogRef = this.dialog.open(RegistrationPopUpComponent, {
      height: '600px',
      width: '400px',
    });
  }
}
