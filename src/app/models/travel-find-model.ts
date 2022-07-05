import { TravelPlaceModel } from './travel-place.model';

export class TravelFindModel {
  travelPlaceList?: Array<number>;
  startDate: Date;
  endDate: Date;
  numberOfPerson: number;

  constructor(
    travelPlaceList: Array<number>,
    startDate: Date,
    endDate: Date,
    numberOfPerson: number
  ) {
    this.travelPlaceList = travelPlaceList;
    this.startDate = startDate;
    this.endDate = endDate;
    this.numberOfPerson = numberOfPerson;
  }
}
