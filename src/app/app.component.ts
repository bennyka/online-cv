import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-cv';
  showSpinner = true;

  constructor() {
    setTimeout(() => {
      this.showSpinner = false;
    }, 250);
  }
}
