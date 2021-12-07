import { Component, OnInit } from '@angular/core';
import { JobData } from './job-data';
import { JobType } from './job-type';
@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  jd:JobData = new JobData();
  myJobs: JobType[] = this.jd.myJobs;//pure data class

  constructor() { }

  ngOnInit(): void {
  }

}
