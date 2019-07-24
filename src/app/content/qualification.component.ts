import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../settings.service';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styles: []
})
export class QualificationComponent implements OnInit {
  qualifications = {};
  iconGraduation = faGraduationCap;
  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settingsService.getJSON().subscribe(data => {
      this.qualifications = data.qualification;
    });
  }

}
