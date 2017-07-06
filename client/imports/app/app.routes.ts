import { Route } from '@angular/router';
 
import { ItemsListComponent } from './items/items-list.component';
import { ItemDetailsComponent } from './items/item-details.component';
 
export const routes: Route[] = [
  { path: '', component: ItemsListComponent },
  { path: 'item/:itemId', component: ItemDetailsComponent }
];