import React, { Component } from 'react';

class Welcome extends Component {
    render() {
      return (
        <div>
            <div className="welcomeMsgDiv">
                <span className="welcome-message">{this.props.welcomeDataProp}</span>
            </div>
        </div>
      );
    }
}
  
export default Welcome;
  