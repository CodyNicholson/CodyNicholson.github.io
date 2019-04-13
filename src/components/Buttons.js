import React, { Component } from 'react';

class Buttons extends Component {
    render() {
      return (
        <div>
            <a className="download-btn-L" href={this.props.buttonsDataProp.buttonLinks[0][1]} target="_blank" rel="noopener noreferrer">{this.props.buttonsDataProp.buttonLinks[0][0]}</a>
            <a className="download-btn-S" href={this.props.buttonsDataProp.buttonLinks[0][1]} target="_blank" rel="noopener noreferrer">↧</a>
            {/* <a className="returnHomeL" href="">Return Home</a>
            <a className="returnHomeS" href="">&#x21A9;</a> */}
        </div>
      );
    }
}
  
export default Buttons;
  