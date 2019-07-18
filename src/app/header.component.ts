import { Component, OnInit } from '@angular/core';
import {SettingsService} from './settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  personDetails = {
    name: String,
    job: String,
    profilimage: String,
    mail: String
  };

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settingsService.getJSON().subscribe(data => {
      this.personDetails.name = data.aboutme.name;
      this.personDetails.job = data.aboutme.job;
      this.personDetails.profilimage = data.aboutme.profilimage;
      this.personDetails.mail = data.aboutme.contactDetails.mail;
    });
  }

}
