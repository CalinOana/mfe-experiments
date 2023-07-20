import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Route1Component} from './route1/route1.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'route1',
    component: Route1Component,
    pathMatch: 'full'
  },
  {
    path: 'bookings',
    loadChildren: () => import('./bookings/bookings.module')
      .then(m => m.BookingsModule)
  }
];
