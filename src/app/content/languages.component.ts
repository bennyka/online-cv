import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../settings.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styles: []
})
export class LanguagesComponent implements OnInit {
  languages = {};
  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settingsService.getJSON().subscribe(data => {
      this.languages = data.languages;
    });
  }
}
