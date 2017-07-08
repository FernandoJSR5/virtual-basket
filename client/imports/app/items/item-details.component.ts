import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs'; 
 
import 'rxjs/add/operator/map';

import { Items } from '../../../../both/collections/items.collection';
import { Item } from '../../../../both/models/item.model';

import { CanActivate } from '@angular/router'; 
import template from './item-details.component.html';
 
@Component({
  selector: 'item-details',
  template
})
export class ItemDetailsComponent implements OnInit, OnDestroy {
  itemId: string;
  paramsSub: Subscription;
  item: Item;
  itemSub: Subscription;
 
  constructor(
    private route: ActivatedRoute
  ) {}
 
  ngOnInit() {
    this.paramsSub = this.route.params
      .map(params => params['itemId'])
      .subscribe(itemId => {
        this.itemId = itemId;

        if (this.itemSub) {
          this.itemSub.unsubscribe();
        }
 
        this.itemSub = MeteorObservable.subscribe('item', this.itemId).subscribe(() => {
          this.item = Items.findOne(this.itemId);
        });
        
        this.item = Items.findOne(this.itemId);
      });
  }

  saveItem() {
    if (!Meteor.userId()) {
      alert('Please log in to change this item');
      return;
    }

    Items.update(this.item._id, {
      $set: {
        success: false
      }
    });
  }

  ngOnDestroy() {
  	this.paramsSub.unsubscribe();
    this.itemSub.unsubscribe();
  }

  canActivate() {
    const item = Items.findOne(this.itemId);
      //return (item && item.owner == Meteor.userId());
  }
}