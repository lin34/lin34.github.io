import { Component, OnInit } from '@angular/core';
import { JobData } from './job-data';
@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  myJobs: JobData[] = [
    {
      jobId: '1',
      jobName: 'Software Developer',
      company: 'Bank of Montreal',
      duration: 'Sept 2020 to Dec 2020',
      description: [
        'Developed a mortgage billing web application used internally within the bank',
        'Performed full stack development with ASP.NET, C#, SQL, JavaScript and Bootstrap',
        'Collaborated with other developers using TFS version control, and Microsoft Teams',
        'Performed database management CRUD operations with ADO.NET, Microsoft SQL Server Management Studio, stored procedures and queries',
        'Presented a COVID-19 Innovation Challenge case competition solution with a group of five as a part of the BMO internship program'
      ],
      picture: '../assets/bmo_logo.jpg',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
