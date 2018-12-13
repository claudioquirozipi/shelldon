import React, { Component } from 'react';

import './LandingPage.css';
import Nav from './LandingPage/Nav';
import MyHeader from './LandingPage/MyHeader';



class LandingPage extends Component {
  
  render() {
    return (
      <div>
        <Nav />
        <MyHeader />
          
      </div>
    );
  }
}

export default LandingPage;