import { Component } from '@angular/core';
import { IRatingOptions } from 'ngx-stars-rating';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-rating-module';

  public rate: number = 4.5;

  public ratingOptions: IRatingOptions = {
    starsCount: 10,
    hoverable: true,
    clickable: true
  }


  constructor() {
    setTimeout(() => {
      this.rate = 2;
    }, 4000);

    setTimeout(() => {
      this.rate = 4.8;
    }, 6000);
  }


  public onRate($event: number): void {
    console.log($event, 'event');
  }

}
