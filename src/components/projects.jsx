import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

import Project from "./project";

import MERNGStack from "../img/projects/merng_stack.PNG";
import ShoppingList from "../img/projects/shopping_list.PNG";
import Arm from "../img/projects/arm.png";
import NoteProject from "../img/projects/note-app/note_page.PNG";
import LineFollow from "../img/line_follow.jpg";
class Projects extends Component {
  state = {};

  render() {
    return (
      <div id="projects">
        <h1>Projects</h1>
        <div
          className="d-flex project-container justify-content-center"
        >
          <Project
            pictureSource={MERNGStack}
            title="Social Media App"
            lang="MERNG stack (MongoDB, Express, React.js, Node.js and GraphQL)"
            shortDescription="This prototype social media app allows users to create an account, login,
      logout, perform CRUD operations for user posts and show a content feed."
            longDescription="
      While logged in, an authentication token is generated so that
      MongoDB can ensure that only the user has access to unique
      content. This uses a react based user interface template library
      called Semantic-UI to render the HTML, using react components. I
      created this by following alongside a video tutorial. I wanted
      to learn how the different technologies worked together in hopes
      to gain an understanding of the broader picture in terms of the
      front end and back end infrastructure. My goal for the future
      would be to gain an in depth understanding of each of these
      technologies, that way I can make my own personal social media
      application."
            link="https://github.com/Lin-Michael/Social-Media-App-1"
          />
          <Project
            pictureSource={ShoppingList}
            title="Shopping List Web App"
            lang="React.js, bootstrap"
            shortDescription="A grocery
      shopping list static web application made with React.js best practices
      including bringing data up into parent components and having a single source of truth.
      "
            insertLine="true"
            longDescription="I built this app to test my knowledge of React.js after
      reading the documentation. In this app, the user can perform
      CRUD operations on shopping list items. I organized it such that
      the shopping list itself is the parent, and each item is a child
      of the parent. All of the information is stored within the
      parent component as an array in order to ensure a single data
      source of truth. In the navbar, I created an item count, similar
      to what you might see in an online store. It counts the number
      of non-zero shopping list items. I added validation so that you
      can only increment items in the cart if they have a name. This
      app is fully deployed using github pages."
            link="https://lin-michael.github.io/react_shopping_list/"
          />

          <Project
            pictureSource={NoteProject}
            title="Note taking app"
            lang="AWS Amplify, React.js, GraphQL"
            shortDescription="A full stack
      An application where users can make an account to create
      notes and attach pictures. The web services for user authentication, text storage and image storage are powered by AWS."
            insertLine="true"
            longDescription=" I used the
      pre-built AWS functionality to supply the user authentication,
      which includes creating user accounts, logging in, MFA and
      logging out. It uses the AWS storage service to store the text
      and image data. GraphQL is used to query the database and
      perform CRUD operations in a way that is easy to manage from the
      front end. Using AWS amplify was a lot of fun because it took
      care of all of the deployment. Unfortunately, the deployment did
      not build on the server, however I do have access to the back
      end resources including user management and information storage
      from within my development environment."
            link="https://github.com/Lin-Michael/note-app"
          />
          <Project
            pictureSource={LineFollow}
            title="Obstacle Course Robot"
            lang="C"
            shortDescription="A robot with custom signal processing circuits for encoders and magnetic sensors designed to navigate a track"
            link="https://devpost.com/software/obstacle-course-robot-zrg1y4"
         />

          <Project
            pictureSource={Arm}
            title="4-axis Robotic arm"
            lang="C++, I2C, Arduino, RF transmitters"
            shortDescription="A 6-axis robotic
      arm with gesture control made using servo motors and Arduino Uno
      boards. Made at Hack the North 2019 with a group of 5."
            longDescription=""
            link="https://devpost.com/software/h-arms-way"
          />
        </div>
      </div>
    );
  }
}

export default Projects;
