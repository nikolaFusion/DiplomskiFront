import { TravelFindModel } from './../../../models/travel-find-model';
import { TravelPlaceApiService } from './../../../services/api-services/travel-place-api.service';
import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { TravelPlaceModel } from 'src/app/models/travel-place.model';

@Component({
  selector: 'app-travel-finder',
  templateUrl: './travel-finder.component.html',
  styleUrls: ['./travel-finder.component.scss'],
})
export class TravelFinderComponent implements OnInit {
  selectedPlace: TravelPlaceModel;
  travelPlaces = new Array<TravelPlaceModel>();
  @ViewChild('matStartDate') matStartDate: ElementRef;
  @ViewChild('matEndDate') matEndDate: ElementRef;

  @Output() addedTravelPlace = new EventEmitter<TravelPlaceModel>();
  @Output() checkAval = new EventEmitter<TravelFindModel>();

  constructor(private travelPlacesApiService: TravelPlaceApiService) {}

  ngOnInit() {
    this.travelPlacesApiService.GetAll().subscribe((d) => {
      this.travelPlaces = d;
    });
  }

  public ChoiseTravelPlace(): void {
    if (this.selectedPlace == null) {
      return;
    }

    this.addedTravelPlace.emit(this.selectedPlace);
  }

  public CheckAvailability(): void {
    var model = new TravelFindModel(null, new Date(), new Date(), 2);
    this.checkAval.emit(model);
  }
}
