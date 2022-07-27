import { ApplicationsRoutes } from './../../../services/routes-resolver/routes-const.service';
import { map, pipe } from 'rxjs';
import { RegistrationPopUpComponent } from './../registration-pop-up/registration-pop-up.component';
import { LoginPopUpComponent } from './../login-pop-up/login-pop-up.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { UserApiService } from 'src/app/services/api-services/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anonymous-header',
  templateUrl: './anonymous-header.component.html',
  styleUrls: ['./anonymous-header.component.scss'],
})
export class AnonymousHeaderComponent implements OnInit {
  autenticated = false;
  name: string;
  constructor(
    public dialog: MatDialog,
    public authService: AuthService,
    public userApiService: UserApiService,
    public router: Router
  ) {}

  ngOnInit() {
    this.userApiService.getLoggedInUser().subscribe((x) => {
      this.name = x.firstName;
      if (x) {
        this.autenticated = true;
      }
    });
    // this.authService.initialObservable.pipe(
    //   map((d) => {
    //     this.autenticated = d;
    //     if (this.autenticated) {
    //       this.userApiService.getLoggedInUser().subscribe((d) => {
    //         this.name = d.firstName;
    //       });
    //     }
    //   })
    // );
  }

  public OpenLogInPopUp(): void {
    let dialogRef = this.dialog.open(LoginPopUpComponent, {
      height: '600px',
      width: '400px',
      data: true,
    });
  }

  public LogOut(): void {
    this.authService.logout();
    window.location.reload();
  }

  public OpenRegistrationPopUp(): void {
    let dialogRef = this.dialog.open(RegistrationPopUpComponent, {
      height: '600px',
      width: '400px',
    });
  }
}
