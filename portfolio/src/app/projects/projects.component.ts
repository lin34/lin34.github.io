import { Component, OnInit } from '@angular/core';
import { ProjectData } from './project-data';
@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  myProjects: ProjectData[] = [
    {
      id: 'bicepcurlcounter',
      name: 'Bicep Curl Counter',
      lang: 'Python, Mediapipe, OpenCV',
      shortDescription:'A handy machine vision workout tool to count your curls.',
      longDescription: `Uses mediapipe's pose detection library to track joints.
      The elbow joint angle is calculated using trigonometry and the relative angle between the left shoulder, left elbow
      and left wrist. From this, the stage of the bicep curl is found. If the angle is greater than 160 degrees,
      it is in the down position, however when it reaches < 30 degrees, it is in the up position.
      When the arm transitions between these two stages, the counter is incremented.`,
      link: 'https://github.com/lin34/BicepCurlCounter',
      picture: '../assets/projects/bicep_curl_counter.PNG',
    },
    {
      id: 'wifismartthermostat',
      name: 'Wifi Smart Thermostat',
      lang: 'Python, Flask, REST API, Multi-threading, SolidWorks',
      shortDescription:'This Wifi Smart thermostat allows you to remotely control your HVAC system.',
      longDescription: `Wifi smart thermostat made using Raspberry Pi controlled relays. I configured a basic Flask Restful
                        server to handle http requests. I also made a Flask web app connected that can be accessed through 
                        any device on the same network via the host IP address.`,
      link: 'https://github.com/lin34/wifi_smart_thermostat',
      picture: '../assets/projects/wifi_therm_with_display.jpg',
    },
    {
      id: 'socialmediaapp',
      name: 'Social Media App',
      lang: 'MERNG stack (MongoDB, Express, React.js, Node.js and GraphQL)',
      shortDescription: `This prototype social media app allows users to create an account, login,
                        logout, perform CRUD operations for user posts and show a content feed.
                        Made by following a youtube tutorial video`,
      longDescription: `While logged in, an authentication token is generated so that
                        MongoDB can ensure that only the user has access to unique
                        content. This uses a react based user interface template library
                        called Semantic-UI to render the HTML, using react components. I
                        created this by following alongside a video tutorial. I wanted
                        to learn how the different technologies worked together in hopes
                        to gain an understanding of the broader picture in terms of the
                        front end and back end infrastructure. My goal for the future
                        would be to gain an in depth understanding of each of these
                        technologies, that way I can make my own personal social media
                        application.`,
      link: 'https://github.com/Lin-Michael/Social-Media-App-1',
      picture: '../assets/projects/merng_stack.PNG',
    },
    {
      id: 'pidcontroller',
      name: 'PID Controller',
      lang: 'MatLab, Control Theory',
      shortDescription:
        `Designed an accurate motion controller for a rack and pinion driven cart. 
        Engineered and tuned lead, lag and notch filters with MATLAB Simulink.`,
      longDescription:
      `Designed an accurate motion controller for a rack and pinion driven cart. 
      Engineered and tuned lead, lag and notch filters with MATLAB Simulink.`,
      link: '../assets/projects/MTE360 Project 4_submission.pdf',
      picture: '../assets/projects/mte360_PID.PNG',
    },
    {
      id: 'obstaclecourserobot',
      name: 'Obstacle Course Robot',
      lang: 'C',
      shortDescription:
        'A robot with custom signal processing circuits for encoders and magnetic sensors designed to navigate a track',
      longDescription:
        'A robot with custom signal processing circuits for encoders and magnetic sensors designed to navigate a track',
      link: 'https://devpost.com/software/obstacle-course-robot-zrg1y4',
      picture: '../assets/line_follow.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
