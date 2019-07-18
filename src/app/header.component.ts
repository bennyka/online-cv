import { Component, OnInit } from '@angular/core';
import {SettingsService} from './settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  name = '';
  job = '';
  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settingsService.getJSON().subscribe(data => {
      this.name = data.aboutme.name;
      this.job = data.aboutme.job;
    });
  }

}
