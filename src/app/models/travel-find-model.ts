import { TravelPlaceModel } from './travel-place.model';

export class TravelFindModel {
  listOfPlaces?: Array<TravelPlaceModel>;
  startDate: Date;
  endDate: Date;
  numberOfPerson: number;

  constructor(
    listOfPlaces: Array<TravelPlaceModel>,
    startDate: Date,
    endDate: Date,
    numberOfPerson: number
  ) {
    this.listOfPlaces = listOfPlaces;
    this.startDate = startDate;
    this.endDate = endDate;
    this.numberOfPerson = numberOfPerson;
  }
}
