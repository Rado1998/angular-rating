import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxStarsRatingModule } from 'ngx-stars-rating';

import { AppComponent } from './app.component';
import { RatingModule } from './rating-module/rating.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
