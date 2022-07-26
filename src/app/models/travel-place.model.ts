export class TravelPlaceModel {
  travelPlaceID: number;
  name: string;
  country: string;
  imageUrl: string;
  description: string;

  constructor(
    name?: string,
    country?: string,
    imageUrl?: string,
    description?: string,
    travelPlaceID?: number
  ) {
    this.name = name;
    this.country = country;
    this.imageUrl = imageUrl;
    this.description = description;
    this.travelPlaceID = travelPlaceID;
  }
}
