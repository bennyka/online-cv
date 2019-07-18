import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../settings.service';

@Component({
  selector: 'app-job-experience',
  templateUrl: './job-experience.component.html',
  styles: []
})
export class JobExperienceComponent implements OnInit {
  experiences = {};
  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settingsService.getJSON().subscribe(data => {
      this.experiences = data.experiences;
    });
  }

}
