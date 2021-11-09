import { Component, OnInit } from '@angular/core';
import { ProjectData } from '../project-data';
import { ProjectType } from '../project-type';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  name:string ='';
  //TODo: Make a project data service
  pd:ProjectData = new ProjectData();
  myProjects: ProjectType[] = this.pd.myProjects;
  project:any;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    window.scrollTo(0,1);//document.body.scrollHeight
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      console.log(this.name);
    });
    this.project = this.pd.getProjectFromId(this.name);
  }

}
