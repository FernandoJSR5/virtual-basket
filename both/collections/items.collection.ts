import { MongoObservable } from 'meteor-rxjs';

import { Item } from '../models/item.model';

export const Items = new MongoObservable.Collection<Item>('items');