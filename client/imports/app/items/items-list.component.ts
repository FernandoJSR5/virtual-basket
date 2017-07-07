import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';
 
import { Items } from '../../../../both/collections/items.collection';
import { Item } from '../../../../both/models/item.model';
 
import template from './items-list.component.html';
 
@Component({
  selector: 'items-list',
  template
})
export class ItemsListComponent implements OnInit, OnDestroy {
  items: Observable<Item[]>;
  itemsSub: Subscription;
 
  ngOnInit() {
    this.items = Items.find({}).zone();
    this.itemsSub = MeteorObservable.subscribe('items').subscribe();
  }
 
  removeItem(item: Item): void {
    Items.remove(item._id);
  }

  search(value: string): void {
    this.items = Items.find(value ? { station: value } : {}).zone();
  }

  ngOnDestroy() {
  	this.itemsSub.unsubscribe();
  }
}