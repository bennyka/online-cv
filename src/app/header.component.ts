import { Component, OnInit } from '@angular/core';
import {SettingsService} from './settings.service';
import { faXingSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  iconXing = faXingSquare;
  iconLinkedin = faLinkedin;

  personDetails = {
    name: String,
    job: String,
    profilimage: String,
    mail: String,
    mailTo: '',
    xingUrl: String,
    linkedinUrl: String
  };

  constructor(private settingsService: SettingsService) { }
  iconSend = faPaperPlane;
  ngOnInit() {
    this.settingsService.getJSON().subscribe(data => {
      this.personDetails.name = data.aboutme.name;
      this.personDetails.job = data.aboutme.job;
      this.personDetails.profilimage = data.aboutme.profilimage;
      this.personDetails.mail = data.aboutme.contactDetails.mail;
      this.personDetails.mailTo = 'mailto:' + data.aboutme.contactDetails.mail;
      this.personDetails.xingUrl = data.aboutme.contactDetails.xing;
      this.personDetails.linkedinUrl = data.aboutme.contactDetails.linkedin;
    });
  }

}
