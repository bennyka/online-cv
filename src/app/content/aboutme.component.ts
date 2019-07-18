import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../settings.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styles: []
})
export class AboutmeComponent implements OnInit {
  // init variables
  // tslint:disable-next-line:ban-types
  aboutmeText: String;

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settingsService.getJSON().subscribe(data => {
      this.aboutmeText = data.aboutme.text;
    });
  }

}
