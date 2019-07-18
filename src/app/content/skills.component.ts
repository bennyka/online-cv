import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../settings.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: []
})
export class SkillsComponent implements OnInit {
  skills = [];
  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settingsService.getJSON().subscribe(data => {
      this.skills = data.skills;
    });
  }

}
