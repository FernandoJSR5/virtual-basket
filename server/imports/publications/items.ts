import { Meteor } from 'meteor/meteor';
import { Items } from '../../../both/collections/items.collection';
 
Meteor.publish('items', function() {
  return Items.find(buildQuery.call(this));
});
 
Meteor.publish('item', function(itemId: string) {
  return Items.find(buildQuery.call(this, itemId));
});
 
 
function buildQuery(itemId?: string): Object {
  const isAvailable = {
    $or: [{
      success: true
    }]
  };
 
  if (itemId) {
    return {
      $and: [{
          _id: itemId
        },
        isAvailable
      ]
    };
  }
 
  return isAvailable;
}