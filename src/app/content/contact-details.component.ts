import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../settings.service';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: []
})
export class ContactDetailsComponent implements OnInit {
  iconMapPin = faMapPin;
  iconMail = faEnvelope;
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
