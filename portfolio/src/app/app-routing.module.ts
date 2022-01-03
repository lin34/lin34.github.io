import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLandingComponent } from './main-landing/main-landing.component';
import { ProjectComponent } from './projects/project/project.component';
import { JobComponent } from './work-experience/job/job.component';

const routes: Routes = [
  //{ path: '',   redirectTo: 'hello', pathMatch: 'full' },
  { path: '',   component: MainLandingComponent },
  { path: 'project/:id', component: ProjectComponent },
  { path: 'experience/:id', component: JobComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
