import React, { Component } from 'react';

class Contact extends Component {
    render() {
      return (
        <ul className="flex-box">
            <li>
                <span className="orange-text">Email</span>
                <span className="white-text">{this.props.contactDataProp.email}</span>
            </li>
            <li>
                <span className="orange-text">GitHub</span>
                <span className="white-text">{this.props.contactDataProp.github}</span>
            </li>
            <li>
                <span className="orange-text">LinkedIn</span>
                <span className="white-text">{this.props.contactDataProp.linkedIn}</span>
            </li>
            <li>
                <span className="orange-text">Location</span>
                <span className="white-text">{this.props.contactDataProp.location}</span>
            </li>
        </ul>
      );
    }
  }

  export default Contact;
