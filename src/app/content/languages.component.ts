import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../settings.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styles: []
})
export class LanguagesComponent implements OnInit {
  iconStar = faStar;
  iconStarHalf = faStarHalf;

  languages = {};
  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settingsService.getJSON().subscribe(data => {
      this.languages = data.language;
    });
  }
}
