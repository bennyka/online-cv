import { Component, OnInit } from '@angular/core';
import {SettingsService} from './settings.service';
import { faXingSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

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
    mail: String
  };

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settingsService.getJSON().subscribe(data => {
      this.personDetails.name = data.aboutme.name;
      this.personDetails.job = data.aboutme.job;
      this.personDetails.profilimage = data.aboutme.profilimage;
      this.personDetails.mail = data.aboutme.contactDetails.mail;
      this.personDetails.xing = data.aboutme.contactDetails.xing;
      this.personDetails.linkedin = data.aboutme.contactDetails.linkedin;
    });
  }

}
