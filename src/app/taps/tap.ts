import { Beer } from "app/beers/beer";

export class Tap {
   _id?: string;
   name: string;
   tapped: boolean;

   constructor(public beer?: Beer, public beers?: Beer[]){}
}
