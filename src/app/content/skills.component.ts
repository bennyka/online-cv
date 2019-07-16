import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: []
})
export class SkillsComponent implements OnInit {
  developerSkills = [
    {name: 'JavaScript', value: '80', text: 'Gut'},
    {name: 'CSS', value: '20', text: 'Grundkenntnisse'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
