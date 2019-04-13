import React, { Component } from 'react';
import Header from './components/Header';
import Jobs from './components/Jobs';
import Projects from './components/Projects';
import Education from './components/Education';
import Honors from './components/Honors';
import Service from './components/Service';
import Footer from './components/Footer';
import './App.css';
import data from './data.js';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header headerDataProp={data.bio}/>
        <Jobs jobsDataProp={data.jobs}/>
        <Projects projectsDataProp={data.projects}/>
        <Education educationDataProp={data.schools}/>
        <Honors honorsDataProp={data.honors}/>
        <Service serviceDataProp={data.service}/>
        <Footer footerDataProp={data.bio}/>
      </div>
    );
  }
}

export default App;
