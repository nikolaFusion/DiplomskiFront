import { ArrangemantsModel } from 'src/app/models/arrangemants.model';
import { TravelPlaceModel } from 'src/app/models/travel-place.model';
import { mergeMap } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { TravelPlaceService } from './../../../../services/travel-place.service';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { ApplicationsRoutes } from 'src/app/services/routes-resolver/routes-const.service';

@Component({
  selector: 'app-travel-place-info',
  templateUrl: './travel-place-info.component.html',
  styleUrls: ['./travel-place-info.component.scss'],
})
export class TravelPlaceInfoComponent implements OnInit {
  id: string;
  travelPlace = new TravelPlaceModel();
  arrangementList = new Array<ArrangemantsModel>();
  spinnerVisiable = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private travelPlaceService: TravelPlaceService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'] as string;

    if (isNaN(parseInt(this.id))) {
      this.router.navigate([ApplicationsRoutes.HomeFinding]);
    }

    this.travelPlaceService.GetByID(this.id).subscribe((x) => {
      this.travelPlace = x;
      this.spinnerVisiable = false;
    });

    this.travelPlaceService.GetArrangementByTPId(this.id).subscribe((x) => {
      this.arrangementList = x;
      this.spinnerVisiable = false;
    });
  }
}
