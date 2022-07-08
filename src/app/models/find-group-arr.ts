import { ArrangemantsModel } from './arrangemants.model';

export class FindGroupArrModel {
  arrangementGroupID: number;
  arrangementsIDs: Array<number>;
  price: number;
  arrangements: Array<ArrangemantsModel>;

  constructor(
    arrangemants: Array<ArrangemantsModel>,
    price: number,
    arrangementGroupID: number,
    arrangementsIDs: Array<number>
  ) {
    this.arrangements = arrangemants;
    this.arrangementGroupID = arrangementGroupID;
    this.price = price;
    this.arrangementsIDs = arrangementsIDs;
  }
}
