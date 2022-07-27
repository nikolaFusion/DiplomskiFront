import { TravelPlaceService } from './../../../services/travel-place.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-arrangements-group',
  templateUrl: './my-arrangements-group.component.html',
  styleUrls: ['./my-arrangements-group.component.scss'],
})
export class MyArrangementsGroupComponent implements OnInit {
  constructor(private travelService: TravelPlaceService) {}

  ngOnInit() {
    this.travelService.GetMyArrangements().subscribe((x) => {
      console.log(x);
    });
  }
}
