import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MainLandingComponent } from './main-landing/main-landing.component';
import { ProjectComponent } from './projects/project/project.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { JobComponent } from './work-experience/job/job.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    WorkExperienceComponent,
    NavBarComponent,
    FooterComponent,
    MainLandingComponent,
    ProjectComponent,
    KnowledgeComponent,
    JobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
