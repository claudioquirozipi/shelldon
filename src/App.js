import React, { Component } from 'react';
import firebase from 'firebase';
// import Login from './components/login.js';
import './App.css';

// componentes
import LandingPage from './components/LandingPage.js';

class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      user: null,
      auth: false
    };
    this.miRender = this.miRender.bind(this);
  }


  handleLogout() {
    firebase.auth().signOut()
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged( user => {
      this.setState({  user })

    }); 
  }
  miRender() {
        if (this.state.user) {
          console.log("true true")
          return ( 
            <div>
              <h1>Estás conectado como: {this.state.user.email}</h1>
              <button onClick={this.handleLogout}>Cerrar seción</button>
            </div>
          )
        } else {
          console.log("false")
          return (
            <div>
              <LandingPage />
            </div>
          )
        }
  }
  render() {
       
    return (
      <div className="App">
        {console.log(this.state.user)}
        {this.miRender()}   
      </div>
    );
  }
}

export default App;
