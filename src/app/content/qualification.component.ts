import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../settings.service';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styles: []
})
export class QualificationComponent implements OnInit {
  qualifications = {};
  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settingsService.getJSON().subscribe(data => {
      this.qualifications = data.qualification;
    });
  }

}
