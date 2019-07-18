import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../settings.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: []
})
export class ContactDetailsComponent implements OnInit {
  contactDetails = {
    mail: String,
    location: String
  };
  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settingsService.getJSON().subscribe(data => {
      this.contactDetails.mail = data.aboutme.contactDetails.mail;
      this.contactDetails.location = data.aboutme.location;
    });
  }

}
