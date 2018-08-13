import React, { Component } from 'react';
import './App.css';
import ProfilePage from './containers/ProfilePage/ProfilePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProfilePage />
      </div>
    );
  }
}

export default App;
