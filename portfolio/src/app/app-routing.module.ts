import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLandingComponent } from './main-landing/main-landing.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  { path: '/hello', component: MainLandingComponent },
  { path: '/project/:name', component: ProjectComponent },
  { path: '',   redirectTo: '/hello', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
