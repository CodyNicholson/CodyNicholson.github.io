import React, { Component } from 'react';

class Education extends Component {
    render() {
      return (
        <div id="education" className="gray">
            <h2>Education</h2>
            {
            this.props.educationDataProp.map( function(school, i)
            {
              return (
                <div className="resume-item" key={i}>
                  <div className="resume-item-title-div">
                    <a className="resume-item-title" href={school.link} target="_blank">{school.name}</a>
                  </div>
                  <p>{school.degree}</p>
                  <div className="date-text">{school.dates}</div>
                  <div className="location-text">{school.location}</div>
                  <p>
                    <br/>
                    {school.description}
                  </p>
                </div>
              )
            })
          }
        </div>
      );
    }
}
  
export default Education;
