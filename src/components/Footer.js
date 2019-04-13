import React, { Component } from 'react';
import Contact from './Contact';

class Footer extends Component {
  render() {
    return (
      <div className="banner">
        <hr/>
        <Contact contactDataProp={this.props.footerDataProp.contacts}/>
      </div>
    );
  }
}
  
export default Footer;
