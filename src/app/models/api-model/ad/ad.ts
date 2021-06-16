import {Model} from '../model/model';
import {Picture} from '../picture/picture';
import {Fuel} from '../fuel/fuel';
import {Brand} from '../brand/brand';

export class Ad {
  id: number;
  title: string;
  price: string;
  age: string;
  mileage: string;
  adPostingDate: Date;
  generalDescription: Text;
  feature: Text;
  garage: number;

  brand: Brand['brandName'] | any[];
  model: Model['modelName'] | any[];
  picture: Picture['pictureLink'] | any[];
  fuel: Fuel['type'] | any[];
}
