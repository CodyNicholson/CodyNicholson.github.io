import React, { Component } from 'react';

class Jobs extends Component {
    render() {
      return (
        <div id="workExperience" className="gray">
            <h2>Work Experience</h2>
            {
            this.props.jobsDataProp.map( function(job, i)
            {
              return (
                <div className="resume-item" key={i}>
                  <div className="resume-item-title-div">
                    <a className="resume-item-title" href={job.link} target="_blank">{job.title + " - " + job.employer}</a>
                  </div>
                  <div className="date-text">{job.dates}</div>
                  <div className="location-text">{job.location}</div>
                  <p>
                    <br/>
                    {job.description}
                  </p>
                </div>
              )
            })
          }
        </div>
      );
    }
}
  
export default Jobs;
