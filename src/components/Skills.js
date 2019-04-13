import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <div>
        <h3 id="skills-list-title">Skills:</h3>
        <ul className="skill-list">
        {
          this.props.skillsDataProp.map( function(skill, i)
          {
            return (
              <li className="flex-item skill-item" key={i}>
                <span className="white-text">{skill}</span>
              </li>
            );
          })
        }
        </ul>
      </div>
    );
  }
}

export default Skills;
