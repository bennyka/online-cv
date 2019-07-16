import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: ['font { color: black; }']
})
export class SkillsComponent implements OnInit {
  skills = [
    {
      title: 'Developer Skills',
      // tslint:disable-next-line:max-line-length
      introText: 'JavaScript: App Entwicklung iOS & Android \n' +
        'HTML5 & CCS3: Website Gestaltung \n' +
        'SQL: App- und Website-Backend \n' +
        'SAP SME: Entwicklung von Produktmodellen',
      skills: [
        {name: 'JavaScript & Angular', value: '80', text: 'Sehr gut'},
        {name: 'HTML5 & CSS', value: '70', text: 'Gut'},
        {name: 'SQL', value: '70', text: 'Gut'},
        {name: 'SAP SME', value: '55', text: 'Gut'}
      ]
    },
    {
      title: 'PM Skills',
      // tslint:disable-next-line:max-line-length
      introText: 'Management: Qualitäts-, Prozess & Anforderungsmanagement \n' +
        'Projektmanagement klassisch: Wasserfall \n' +
        'Projektmanagement modern: Agile Vorgehensweise (SCRUM) \n' +
        'Kommunikation: Kommunikation im Team und mit dem Kundenbetreeung \n' +
        'Belastbarkeit \n' +
        'Organisationsfähigkeit und Strukturierung',
      skills: [
        {name: 'Management', value: '80', text: 'Gut'},
        {name: 'Projektmanagement klassisch', value: '60', text: 'Gut'},
        {name: 'Projektmanagement agil', value: '80', text: 'Sehr gut'},
        {name: 'Kommunikation', value: '75', text: 'Gut'},
        {name: 'Belastbarkeit', value: '75', text: 'Gut'},
        {name: 'Organisationsfähigkeit', value: '80', text: 'Sehr gut'}
      ]
    }
  ];



  constructor() { }

  ngOnInit() {
  }

}
