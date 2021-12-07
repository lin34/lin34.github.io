import { Component, OnInit } from '@angular/core';
import { JobData } from '.././job-data';
import { JobType } from '.././job-type';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  //TODo: Make a project data service
  jd:JobData = new JobData();
  //myJobs: JobType[] = this.jd.myJobs;//pure data class
  job:any;
  jobExists:Boolean = true;
  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    window.scrollTo(0,1);//document.body.scrollHeight
    const id = this.route.snapshot.paramMap.get('id');
    this.job = this.jd.getJobFromId(id);
    if(this.job == null){
      this.jobExists = false;//show project doesnt exist page
    }
  }

}
