import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"
class Project extends Component {
    render() { 

        return ( 
            <Card className="project-card">
            <Card.Img className="img-project" src={this.props.pictureSource} variant="top" />
            <Card.Body>
              <Card.Title className="font-weight-bold">
                {this.props.title}
              </Card.Title>
              <Card.Text>
                <p className="font-italic">
                  {this.props.lang}
                </p>
                {this.props.insertLine =="true" && <br></br>} 
                <p className="font-weight-bold">Description:</p>
                {this.props.shortDescription}
                {/* {this.props.longDescription} */}
                
              </Card.Text>
              <Button
                variant="primary"
                href={this.props.link}
              >
                See Project
              </Button>
            </Card.Body>
          </Card>
         );
    }
}

export default Project;