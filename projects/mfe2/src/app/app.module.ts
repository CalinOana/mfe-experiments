import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { BookingsModule } from './bookings/bookings.module';
import { APP_ROUTES } from './app.routes';
import { Route1Component } from './route1/route1.component';

@NgModule({
  imports: [
    BrowserModule,
    // BookingsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    HomeComponent,
    AppComponent,
    Route1Component,
  ],
  providers: [],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
