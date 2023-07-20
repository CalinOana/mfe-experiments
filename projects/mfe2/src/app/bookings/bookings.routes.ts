import {Routes} from '@angular/router';
import {BookingsSearchComponent} from './bookings-search/bookings-search.component';
import {Route1Component} from './route1/route1.component';

export const FLIGHTS_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'bookings-search',
    pathMatch: 'full'
  },
  {
    path: 'bookings-search',
    component: BookingsSearchComponent
  }, {
    path: 'bookings-search/route1-in-mfe2',
    component: Route1Component,
    pathMatch: 'full'
  }
];
