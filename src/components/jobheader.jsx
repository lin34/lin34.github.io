import React, { Component } from "react";

class JobHeader extends Component {
  render() {
    return (
      <div className="job-header">
        <table className="table-job">
          <tr>
            <td className="logo-col">
              <img
                src={this.props.picture}
                className="company-logo"
                alt="Company logo"
              ></img>
            </td>
            <td className="job-col">
              <h5 className="text-job-name font-weight-bold m-2">
                {this.props.jobName}
              </h5>
              <p className="m-2">{this.props.company}</p>
            </td>
            <td className="duration-col">
              <p className="duration-text">{this.props.duration}</p>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default JobHeader;
