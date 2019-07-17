import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  projects = [
    // tslint:disable-next-line:max-line-length
    {title: 'Webseite', subtitle: 'Startup Internetauftritt', image: 'http://benjamin-karla.de/assets/images/projects/project-evofintech.png', text: 'Zuletzt habe ich ein junges Startup Unternehmen bei der Erstellung ihrer Webseite unterstützt. Das Projekt wurde mit HTML5, JavaScript und JQuery umgesetzt.'},
    // tslint:disable-next-line:max-line-length
    {title: 'Digitale Inventarisierung aller Art von Gegenständen', subtitle: '', image: 'http://benjamin-karla.de/assets/images/projects/project-inventory.jpg', text: 'Inventory unterstützt Sie bei jeglicher Art der Inventarisierung. Von der privaten DVD Sammlung, bis hin zur professionellen Geschäftsinventur.'},
    // tslint:disable-next-line:max-line-length
    {title: 'Binäre Risiko Analyse', subtitle: '', image: 'http://benjamin-karla.de/assets/images/projects/project-bra.jpg', text: 'Dieses Projekt ist im Rahmen meiner Bachelorthesis entstanden und basiert auf den Grundlagen von Ben Sapiro. Bei der Binary Risk Analysis (BRA) handelt es sich grundlegend um eine einfache, schnelle und effektive Methode zur IT-Risikoeinschätzung. Meine Arbeit erweitert das Grundkonzept um weitere Fragenkataloge zu neuen Bedrohungsszenarien. Derzeit befindet sich die App in der entwicklung.'}
  ];

}
