import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { AboutmeComponent } from './content/aboutme.component';
import { ProjectsComponent } from './content/projects.component';
import { JobExperienceComponent } from './content/job-experience.component';
import { SkillsComponent } from './content/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutmeComponent,
    ProjectsComponent,
    JobExperienceComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
