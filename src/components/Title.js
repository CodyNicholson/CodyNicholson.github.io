import React, { Component } from 'react';

class Title extends Component {
    render() {
      return (
        <div>
            <h1>{this.props.titleDataProp.name}</h1>
            <p className="role">{this.props.titleDataProp.role}</p>
            <hr/>
        </div>
      );
    }
}
  
export default Title;
