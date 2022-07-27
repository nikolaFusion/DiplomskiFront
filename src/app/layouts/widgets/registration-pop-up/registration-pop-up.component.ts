import { MatDialogRef } from '@angular/material/dialog';
import { RegistrationModel } from './../../../models/registration-model';
import { UserApiService } from './../../../services/api-services/user-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-pop-up',
  templateUrl: './registration-pop-up.component.html',
  styleUrls: ['./registration-pop-up.component.scss'],
})
export class RegistrationPopUpComponent implements OnInit {
  registrationUser = new RegistrationModel('', '', '', '', 18);
  spinnerVisiable = false;

  constructor(
    private userApiService: UserApiService,
    private refDialog: MatDialogRef<RegistrationPopUpComponent>
  ) {}

  ngOnInit() {}

  public Registration(): void {
    this.spinnerVisiable = true;
    this.userApiService.Registration(this.registrationUser).subscribe((d) => {
      this.spinnerVisiable = false;
      this.refDialog.close();
    });
  }
}
