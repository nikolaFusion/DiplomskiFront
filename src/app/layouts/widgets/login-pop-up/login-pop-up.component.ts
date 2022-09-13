import { InfoPopUpComponent } from './../info-pop-up/info-pop-up.component';
import { LoginModel } from './../../../models/login-model';
import { UserApiService } from './../../../services/api-services/user-api.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { RegistrationPopUpComponent } from '../registration-pop-up/registration-pop-up.component';

@Component({
  selector: 'app-login-pop-up',
  templateUrl: './login-pop-up.component.html',
  styleUrls: ['./login-pop-up.component.scss'],
})
export class LoginPopUpComponent implements OnInit {
  loginUser: LoginModel = new LoginModel('', '');
  spinnerVisiable = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: boolean,
    public dialog: MatDialog,
    public userApiService: UserApiService
  ) {}

  ngOnInit() {}

  public OpenRegistrationPopUp(): void {
    let dialogRef = this.dialog.open(RegistrationPopUpComponent, {
      height: '600px',
      width: '400px',
    });
  }

  public Login(): void {
    this.userApiService.Login(this.loginUser).subscribe((d) => {
      if (d == null) {
        this.dialog.open(InfoPopUpComponent, {
          height: '200px',
          width: '300px',
          data: 'Invalid credentials',
        });
        return;
      }
      localStorage.setItem('token', d.jwtToken);
      if (d != null) {
        this.dialog.closeAll();
        if (this.data) {
          window.location.reload();
        }
      }

      this.dialog.open(InfoPopUpComponent, {
        height: '200px',
        width: '300px',
        data: 'You have successfully login',
      });
    });
  }
}
