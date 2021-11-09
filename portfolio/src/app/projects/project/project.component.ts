import { Component, OnInit } from '@angular/core';
import { ProjectData } from '../project-data';
import { ProjectType } from '../project-type';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  //TODo: Make a project data service
  pd:ProjectData = new ProjectData();
  myProjects: ProjectType[] = this.pd.myProjects;
  project:any;
  projectExists:Boolean = true;
  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    window.scrollTo(0,1);//document.body.scrollHeight
    const id = this.route.snapshot.paramMap.get('id');
    //console.log(id);
    this.project = this.pd.getProjectFromId(id);
    if(this.project == null){
      this.projectExists = false;//show project doesnt exist page
    }
  }

}
