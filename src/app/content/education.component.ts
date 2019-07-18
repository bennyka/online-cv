import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../settings.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styles: []
})
export class EducationComponent implements OnInit {
  educations = {};
  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settingsService.getJSON().subscribe(data => {
      this.educations = data.education;
    });
  }
}
