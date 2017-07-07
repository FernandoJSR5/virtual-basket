import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';
 
import { ItemsListComponent } from './items/items-list.component';
import { ItemDetailsComponent } from './items/item-details.component';
 
export const routes: Route[] = [
  { path: '', component: ItemsListComponent },
  { path: 'item/:itemId', component: ItemDetailsComponent, canActivate: ['canActivateForLoggedIn'] }
];

export const ROUTES_PROVIDERS = [{
  provide: 'canActivateForLoggedIn',
  useValue: () => !! Meteor.userId()
}];