import { LoginModel } from './../../../models/login-model';
import { UserApiService } from './../../../services/api-services/user-api.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { RegistrationPopUpComponent } from '../registration-pop-up/registration-pop-up.component';

@Component({
  selector: 'app-login-pop-up',
  templateUrl: './login-pop-up.component.html',
  styleUrls: ['./login-pop-up.component.scss'],
})
export class LoginPopUpComponent implements OnInit {
  loginUser: LoginModel = new LoginModel('', '');

  constructor(
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
      localStorage.setItem('token', d.jwtToken);
      if (d != null) {
        this.dialog.closeAll();
        window.location.reload();
      }
    });
  }
}
