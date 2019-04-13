import React, { Component } from 'react';

class Honors extends Component {
    render() {
      return (
        <div id="honors" className="white">
          <h2>Honors and Awards</h2>
          {
            this.props.honorsDataProp.map( function(honor, i)
            {
              return (
                <div className="resume-item" key={i}>
                  <div className="resume-item-title-div">
                    <a className="resume-item-title" href={honor.link} target="_blank">{honor.title}</a>
                  </div>
                  <div className="date-text">{honor.dates}</div>
                  <div className="location-text">{honor.location}</div>
                  <p>
                    <br/>
                    {honor.description}
                  </p>
                </div>
              )
            })
          }
        </div>
      );
    }
}
  
export default Honors;
