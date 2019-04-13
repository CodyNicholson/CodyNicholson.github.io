import React, { Component } from 'react';

class Image extends Component {
    render() {
      return (
        <div>
        {
            this.props.image.map(function(img, i)
            {
                return (
                    <a key={i} target="_blank" href={img}>
                        <img className="resume-item-img" alt="project img" src={img}/>
                    </a>
                );
            })
        }
        </div>
      );
    }
}
  
export default Image;
