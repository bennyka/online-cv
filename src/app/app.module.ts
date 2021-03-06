import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { AboutmeComponent } from './content/aboutme.component';
import { ProjectsComponent } from './content/projects.component';
import { JobExperienceComponent } from './content/job-experience.component';
import { SkillsComponent } from './content/skills.component';
import { EducationComponent } from './content/education.component';
import { QualificationComponent } from './content/qualification.component';
import { LanguagesComponent } from './content/languages.component';
import {HttpClientModule} from '@angular/common/http';
import { ContactDetailsComponent } from './content/contact-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {BarRatingModule} from 'ngx-bar-rating';
import {ANIMATION_TYPES, Ng2LoadingSpinnerModule} from 'ng2-loading-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutmeComponent,
    ProjectsComponent,
    JobExperienceComponent,
    SkillsComponent,
    EducationComponent,
    QualificationComponent,
    LanguagesComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    BarRatingModule,
    Ng2LoadingSpinnerModule.forRoot({
      backdropColor: '#DAE3E7',
      spinnerColor: '#4F4F4F',
      spinnerSize: 'md',
      spinnerFontSize: '3rem',
      animationType  : ANIMATION_TYPES.dualCircle
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
