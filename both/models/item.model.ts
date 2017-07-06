import { CollectionObject } from './collection-object.model';
 
export interface Item extends CollectionObject {
  name: string;
  excerpt: string;
  price: int;
  url: string;
  station: string;
  success: boolean;
}