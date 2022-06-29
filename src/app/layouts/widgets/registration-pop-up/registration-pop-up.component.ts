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

  constructor(private userApiService: UserApiService) {}

  ngOnInit() {}

  public Registration(): void {
    this.userApiService.Registration(this.registrationUser).subscribe((d) => {
      console.log(d);
    });
  }
}
