import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



  firebase.initializeApp({
    apiKey: "AIzaSyBpv5u4p314OBnDmocgCgfCFbMlhBJwIfE",
    authDomain: "sheldon-3d7e3.firebaseapp.com",
    databaseURL: "https://sheldon-3d7e3.firebaseio.com",
    projectId: "sheldon-3d7e3",
    storageBucket: "sheldon-3d7e3.appspot.com",
    messagingSenderId: "1000038379715"
  });




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
