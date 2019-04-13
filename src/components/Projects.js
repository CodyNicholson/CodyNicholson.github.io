import React, { Component } from 'react';
import Image from './Image';

class Projects extends Component {
    render() {
      return (
        <div id="projects" className="white">
          <h2>Projects</h2>
          {
            this.props.projectsDataProp.map( function(project, i)
            {
              return (
                <div className="resume-item" key={i}>
                  <div className="resume-item-title-div">
                    <a className="resume-item-title" href={project.link} target="_blank">{project.title}</a>
                  </div>
                  <div className="date-text">{project.dates}</div>
                  <div className="location-text">{project.location}</div>
                  <p>
                    <br/>
                    {project.description}
                  </p>
                  <Image image={project.images}/>
                </div>
              )
            })
          }
        </div>
      );
    }
}
  
export default Projects;
