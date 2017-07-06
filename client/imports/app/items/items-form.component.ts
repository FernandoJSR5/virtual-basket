import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Items } from '../../../../both/collections/items.collection';

import template from './items-form.component.html';
 
@Component({
  selector: 'items-form',
  template
})
export class ItemsFormComponent implements OnInit {
  addForm: FormGroup;
 
  constructor(
    private formBuilder: FormBuilder
  ) {}
 
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      url: []
    });
  }

  addItem(): void {
    if (this.addForm.valid) {
      Items.insert(this.addForm.value);
 
      this.addForm.reset();
    }
  }
}