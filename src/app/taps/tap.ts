import { Beer } from "app/beers/beer";

export class Tap {
   _id?: string;
   name: string;
   tapped: boolean;
   beer: Beer;
}
