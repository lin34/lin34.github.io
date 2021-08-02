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
      jobId: '4',
      jobName: 'Software Engineer Intern',
      company: 'Bank of America Merrill Lynch',
      duration: 'May 2021 to Present',
      description: [
        'Maintain and improve financial reporting software for multimillion dollar transactions using Angular',
        'Collaborate with an agile team to refine stories and improve testing coverage using Jasmine',
      ],
      picture: '../assets/bofaml.png',
    },
    {
      jobId: '3',
      jobName: 'Software Developer Intern',
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
    {
      jobId: '2',
      jobName: 'Embedded Software Engineer Intern',
      company: 'Ignis Innovation',
      duration: 'Jan 2020 to Mar 2020',
      description: [
        'Configured and installed OLED display compensation drivers on Android phones to reduce pixel burnout',
        'Extended IGNIS’s bare metal C application to read PNG image data from flash memory, then process and send it to the frame buffer to be displayed',
      ],
      picture: '../assets/ignis_logo.png',
    },
    {
      jobId: '1',
      jobName: 'Automation Systems Designer Intern',
      company: 'ATS Automation',
      duration: 'May 2019 to Aug 2019',
      description: [
        'Led the design of a manufacturing process for lyophilized beads by designing molds and conducting tests',
        'Calculated production line tooling requirements by performing cycle time analysis using Design Specification',
        'Resolved bottleneck in high precision stent cutting process by performing root cause analysis'
      ],
      picture: '../assets/ats_logo.jpg',
    },
    {
      jobId: '0',
      jobName: 'Junior Web Developer',
      company: 'University of Waterloo',
      duration: 'Jan 2018 to Apr 2018',
      description: [
        'Improved and refactored a course evaluation metrics dashboard by using PHP, SQL, HTML, CSS and Bootstrap',
        'Led the development of a web app to flag profanity, reducing processing time from 3+ hours to 30 mins',
        'Streamlined onboarding for future workers by writing documentation describing setup process'
      ],
      picture: '../assets/waterloo.png',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
