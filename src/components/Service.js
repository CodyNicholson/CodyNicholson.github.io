import React, { Component } from 'react';
import Image from './Image';

class Service extends Component {
    render() {
      return (
        <div id="comServe" className="gray">
          <h2>Community Service</h2>
          {
            this.props.serviceDataProp.map( function(service, i)
            {
              return (
                <div className="resume-item" key={i}>
                  <div className="resume-item-title-div">
                    <a className="resume-item-title" href={service.link} target="_blank">{service.title}</a>
                  </div>
                  <div className="date-text">{service.dates}</div>
                  <div className="location-text">{service.location}</div>
                  <p>
                    <br/>
                    {service.description}
                  </p>
                  <Image image={service.images}/>
                </div>
              )
            })
          }
        </div>
      );
    }
}
  
export default Service;
