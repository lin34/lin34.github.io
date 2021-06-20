import React, { Component } from 'react';
import Home from './home.jsx'
import WorkExperience from './workexperience.jsx'
import Projects from './projects.jsx'
import Music from './music.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';


class MainContent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="content">
            <WorkExperience/>
            <Projects/>
            <Music/>
        </div>
         );
    }
}
 
export default MainContent;