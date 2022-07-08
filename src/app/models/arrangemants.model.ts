import { TravelCompanyModel } from './travel-company.model';
import { TravelPlaceModel } from './travel-place.model';
export class ArrangemantsModel {
  arrangementID: number;
  travelCompanyID: number;
  dateStart: Date;
  dateEnd: Date;
  travelPlaceID: number;
  price: number;
  seatsInArrangement: number;
  onlyAirplaneTicket: boolean;
  travelPlace: TravelPlaceModel;
  travelCompany: TravelCompanyModel;
}
