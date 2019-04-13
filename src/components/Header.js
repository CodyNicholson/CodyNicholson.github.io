import React, { Component } from 'react';
import Buttons from './Buttons';
import Title from './Title';
import Contact from './Contact';
import Skills from './Skills';
import Welcome from './Welcome';

class Header extends Component {
  render() {
    return (
      <div className="banner">
        <Buttons buttonsDataProp={this.props.headerDataProp}/>
        <Title titleDataProp={this.props.headerDataProp}/>
        <Contact contactDataProp={this.props.headerDataProp.contacts}/>
        <img className="biopic" src={this.props.headerDataProp.bioPic} alt="Cody Nicholson"/>
        <Skills skillsDataProp={this.props.headerDataProp.skills}/>
        <Welcome welcomeDataProp={this.props.headerDataProp.welcomeMessage}/>
      </div>
    );
  }
}
  
export default Header;
