import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"
import "../projectStyle.css";
class Project extends Component {
  constructor() {
    super();
    
  }
    render() {
        return ( 
          <div class="project-box" data-content={this.props.title}>
            <img class="img-project" src={this.props.pictureSource} alt={this.props.title}></img>
          </div>
         );
    }
    
}

export default Project;


