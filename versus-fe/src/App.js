import React, { Component } from 'react';
import './App.css';
import LoginPage from './containers/LoginPage/LoginPage'
import SignUp from './containers/SignUp/SignUp'

class App extends Component {

  render() {
    return (
      <div className="App">
      <SignUp/>
      </div>
    );
  }
}

export default App;
