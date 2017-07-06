import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { ITEMS_DECLARATIONS } from './items';
 
@NgModule({
  imports: [
  	BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    ...ITEMS_DECLARATIONS
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}