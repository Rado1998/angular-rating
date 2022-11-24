import { Component } from '@angular/core';
import { IRatingOptions } from 'ngx-stars-rating';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-rating-module';

  public rate: number = 4.4;

  public ratingOptions: IRatingOptions = {
    starsCount: 5,
    hoverable: true,
    clickable: true
  }


  constructor() {
   
  }


  public onRate($event: number): void {
    console.log($event, 'event');
  }

}
