import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
 
import 'rxjs/add/operator/map';

import { Items } from '../../../../both/collections/items.collection';
import { Item } from '../../../../both/models/item.model';
 
import template from './item-details.component.html';
 
@Component({
  selector: 'item-details',
  template
})
export class ItemDetailsComponent implements OnInit, OnDestroy {
  itemId: string;
  paramsSub: Subscription;
  item: Item;
 
  constructor(
    private route: ActivatedRoute
  ) {}
 
  ngOnInit() {
    this.paramsSub = this.route.params
      .map(params => params['itemId'])
      .subscribe(itemId => {
        this.itemId = itemId
        
        this.item = Items.findOne(this.itemId);
      });
  }

  saveItem() {
    Items.update(this.item._id, {
      $set: {
        name: this.item.name
      }
    });
  }

  ngOnDestroy() {
  	this.paramsSub.unsubscribe();
  }
}