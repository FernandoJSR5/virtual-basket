import { Meteor } from 'meteor/meteor';

import { loadItems } from './imports/fixtures/items';

import './imports/publications/items'; 

Meteor.startup(() => {
	loadItems();
  // code to run on server at startup
});
