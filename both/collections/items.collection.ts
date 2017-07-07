import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

import { Item } from '../models/item.model';

export const Items = new MongoObservable.Collection<Item>('items');

function loggedIn() {
  return !!Meteor.user();
}
 
Items.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});