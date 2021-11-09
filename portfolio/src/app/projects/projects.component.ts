import { Component, OnInit } from '@angular/core';
import { ProjectType } from './project-type';
import { ProjectData } from './project-data';
@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  pd:ProjectData = new ProjectData();
  myProjects: ProjectType[] = this.pd.myProjects;
  constructor() {}

  ngOnInit(): void {
  }
}
