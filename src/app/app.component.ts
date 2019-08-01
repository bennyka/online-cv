import {AfterContentInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  title = 'online-cv';
  showSpinner = true;

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.showSpinner = false;
    }, 300);
  }
}
