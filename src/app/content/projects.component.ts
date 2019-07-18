import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../settings.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {

  constructor(private settingsService: SettingsService) { }

  projects = [];

  ngOnInit() {
    this.settingsService.getJSON().subscribe(data => {
      this.projects = data.projects;
    });
  }
}
