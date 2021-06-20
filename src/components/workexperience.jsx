import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import JobHeader from "./jobheader";
import IgnisLogo from "../img/ignis_logo.png";
import BMOLogo from "../img/bmo_logo.jpg";
import ATSLogo from "../img/ats_logo.jpg";
import fanLogo from "../img/fan_logo.jpg";
import waterlooLogo from "../img/waterloo.png";
import torontoLogo from "../img/toronto_logo.png";
import bofamlLogo from "../img/bofaml.png"
class WorkExperience extends Component {
  state = {};
  render() {
    return (
      <div id="work-experience" className="work-height">
        <div className="d-flex justify-content-center">
          <div className="work-section">
            <h1 >Work Experience</h1>
            <Accordion>

            <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  className="hover-header"
                  eventKey="0"
                >
                  <JobHeader
                    picture={bofamlLogo}
                    jobName="Software Engineer"
                    company="Bank of America Merrill Lynch"
                    duration="May 2021 to Present"
                  />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className="job-description">
                      <ul>
                        <li>
                        Performing front end dev on an agile team to build a client metrics app
                        </li>
                      </ul>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  className="hover-header"
                  eventKey="10"
                >
                  <JobHeader
                    picture={BMOLogo}
                    jobName="Software Developer"
                    company="Bank of Montreal"
                    duration="Sept 2020 to Dec 2020"
                  />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="10">
                  <Card.Body>
                    <div className="job-description">
                      <ul>
                        <li>
                          Developed a mortgage billing web application used
                          internally within the bank
                        </li>
                        <li>
                          Performed full stack development with ASP.NET, C#,
                          SQL, JavaScript and Bootstrap
                        </li>
                        <li>
                          Collaborated with other developers using TFS version
                          control, and Microsoft Teams
                        </li>
                        <li>
                          Performed database management CRUD operations with
                          ADO.NET, Microsoft SQL Server Management Studio,
                          stored procedures and queries
                        </li>
                        <li>
                          Presented a COVID-19 Innovation Challenge case
                          competition solution with a group of five as a part of
                          the BMO internship program
                        </li>
                      </ul>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  className="hover-header"
                  eventKey="20"
                >
                  <JobHeader
                    picture={IgnisLogo}
                    jobName="Embedded Software Engineer"
                    company="Ignis Innovations"
                    duration="Jan 2020 to Mar 2020"
                  />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="20">
                  <Card.Body>
                    <div className="job-description">
                      <p>
                        Ignis Innovations is a startup founded in 2000 which
                        does cutting edge research on OLED display technology.
                        OLED displays promise high resolutions and vivid
                        brightness, however one of the problems with it is that
                        the diodes tend to wear out over time, making the screen
                        have an uneven brightness distribution. A solution to
                        this problem that this company has done pioneering
                        research in is to track the burn out in each pixel and
                        compensate for the loss by supplying the individual
                        pixel with a higher voltage.
                      </p>
                      <p>
                        As an Embedded intern, my job was to develop apply the
                        data gathering and compensation algorithms on a variety
                        of devices to prove its feasibility. Some of the
                        platforms I worked on include Android phones, linux,
                        Windows, xilinx UltraScale and custom display PCBs. I
                        helped to develop a windows application that displays a
                        video and tracks OLED burn in over time. My internship
                        cut short in late March due to the coronavirus outbreak,
                        however I was happy with my experience because I was
                        able to work on meaningful projects while learning new
                        technologies.
                      </p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  className="hover-header"
                  eventKey="30"
                >
                  <JobHeader
                    picture={ATSLogo}
                    jobName="Automation Systems Designer"
                    company="ATS Automation"
                    duration="May 2019 to Aug 2019"
                  />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="30">
                  <Card.Body>
                    <div className="job-description">
                      <p>
                        Automation Tooling Systems (ATS) is a global
                        manufacturer of manufacturing automation. It has
                        provides services for various industries including Life
                        Sciences, Nuclear and Energy, Automotive and more. ATS
                        distinguishes itself from its competitors by offering a
                        patented linear inductance SuperTrak conveyor belt
                        system allowing for faster cycle times and less
                        stations.
                      </p>
                      <p>
                        As a systems design intern in the life sciences
                        division, I helped out with several ongoing projects at
                        various stages in their design lifecycle. The systems
                        department's role at ATS is to bridge the gap between
                        the other departments including Mechanical, Applications
                        (technical sales) and Controls and solve the problems
                        that require the expertise from a combination of the
                        departments. Due to the nature of the job, I was able to
                        learn a great deal about the production of an automated
                        line. I assisted the Applications Engineering team in
                        creating technical proposals by referring to the
                        previous projects to facilitate design reuse. For
                        projects in early stages design and development, I
                        created process cycletime estimations by using excel
                        worksheets and robot-arm simulation software. One of my
                        major tasks was to conduct a proof of principle study on
                        an aseptic manufacturing process involving highly
                        fragile products. For another project, I was asked to
                        troubleshoot a manufacturing line by performing a
                        tolerance analysis on a micron precise part. Finally, I
                        helped out with the factory acceptance testing of a line
                        to ensure that it met the contract requirements.{" "}
                      </p>
                      <p>
                        Overall, I was learned a lot about the automation
                        industry and several of the problems that the industry
                        typically deals with.
                      </p>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  className="hover-header"
                  eventKey="40"
                >
                  <JobHeader
                    picture={fanLogo}
                    jobName="Product Designer"
                    company="Daltec Fans"
                    duration="Sep 2018 to Dec 2018"
                  />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="40">
                  <Card.Body>
                    <div className="job-description">
                      <ul>
                        <li>
                          Modeled centrifugal fans and produced manufacturing
                          drawings for steel sheet metal fabrications in
                          SolidWorks
                        </li>
                        <li>
                          Created a design automation program using DriveWorks
                          which saves 5 hours of development time per fan
                        </li>
                        <li>
                          Consulted with mechanical engineers to establish
                          standards for stiffener placement to reduce
                          vibrations, weld clearances and bending radiuses
                        </li>
                      </ul>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  className="hover-header"
                  eventKey="50"
                >
                  <JobHeader
                    picture={waterlooLogo}
                    jobName="Junior Web Developer"
                    company="University of Waterloo"
                    duration="Jan 2018 to Apr 2018"
                  />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="50">
                  <Card.Body>
                    <div className="job-description">
                      <ul>
                        <li>
                          Developed a course evaluation feedback tool from
                          scratch to read in and display aggregated metrics
                        </li>
                        <li>
                          Designed a user-friendly front-end interface by adding
                          responsive styling using BootStrap4, HTML and CSS
                        </li>
                        <li>
                          Developed backend infrastructure using PHP and MySQL
                          to organize over 100,000 data entries
                        </li>
                      </ul>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  className="hover-header"
                  eventKey="60"
                >
                  <JobHeader
                    picture={torontoLogo}
                    jobName="Camp Counsellor"
                    company="City of Toronto"
                    duration="Jul 2017 to Aug 2017"
                  />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="60">
                  <Card.Body>
                    <div className="job-description">
                      <ul>
                        <li>
                          Organized and led games and activities for children
                          aged 6-12
                        </li>
                      </ul>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkExperience;
