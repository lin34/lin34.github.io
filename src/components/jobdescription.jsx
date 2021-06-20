import React, { Component } from 'react';

class JobDescription extends Component {
    state = {  }
    render() { 
        return ( <div>
            <p>{this.props.description}</p>
        </div> );
    }
}
 
export default JobDescription;