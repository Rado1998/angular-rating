import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-rating-module';

  public rate: number = 4.5;


  constructor() {
    setTimeout(() => {
      this.rate = 2;
    }, 4000);

    setTimeout(() => {
      this.rate = 4.8;
    }, 6000);

    setTimeout(() => {
      this.rate = 0;
    }, 9000);

    setTimeout(() => {
      this.rate = 0.7;
    }, 11000);
  }


  public onRate($event: number): void {
    console.log($event, 'event');
  }

}
