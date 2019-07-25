import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../settings.service';
import { faEnvelope, faMapPin } from '@fortawesome/free-solid-svg-icons';

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
    mailTo: '',
    location: {}
  };
  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settingsService.getJSON().subscribe(data => {
      this.contactDetails.mail = data.aboutme.contactDetails.mail;
      this.contactDetails.mailTo = 'mailto:' + data.aboutme.contactDetails.mail;
      this.contactDetails.location = data.aboutme.location;
    });
  }
}
