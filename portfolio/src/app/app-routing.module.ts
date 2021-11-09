import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLandingComponent } from './main-landing/main-landing.component';
import { ProjectComponent } from './projects/project/project.component';

const routes: Routes = [
  { path: '',   redirectTo: 'hello', pathMatch: 'full' },
  { path: 'hello', component: MainLandingComponent },
  { path: 'project/:id', component: ProjectComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
