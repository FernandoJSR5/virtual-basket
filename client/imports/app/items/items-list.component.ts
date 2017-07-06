import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
 
import { Items } from '../../../../both/collections/items.collection';
import { Item } from '../../../../both/models/item.model';
 
import template from './items-list.component.html';
 
@Component({
  selector: 'items-list',
  template
})
export class ItemsListComponent {
  items: Observable<Item[]>;
 
  constructor() {
    this.items = Items.find({}).zone();
  }
 
  removeItem(item: Item): void {
    Items.remove(item._id);
  }
}