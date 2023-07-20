import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsSearchComponent } from './bookings-search/bookings-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHTS_ROUTES } from './bookings.routes';
import { Route1Component } from './route1/route1.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FLIGHTS_ROUTES)
  ],
  declarations: [
    BookingsSearchComponent,
    Route1Component
  ]
})
export class BookingsModule { }
