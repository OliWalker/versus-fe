import React, { Component } from 'react';
import './LoginPage.css'

class LoginPage extends Component {

  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  sendDetails = (event) => {
    event.preventDefault()

  let loginDetails = {
      username:this.state.username,
      password:this.state.password
    }

    fetch('http://localhost:3000/loginDetails', {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(loginDetails)
    })

  }

  handleUsernameChange =  (event) => {
    this.setState({username: event.target.value})
  }

  handlePasswordChange =  (event) => {
    this.setState({password: event.target.value})
  }

  render() {
    return (
      <div>
      <h1> Login </h1>
      <div className="login details">
        <form>
          Username <br/>
          <input type="text" onChange={this.handleUsernameChange} value={this.state.username}/>
          <br/>
          password <br/>
          <input type="text" onChange={this.handlePasswordChange} value={this.state.password}/>
          <br/>
          <input type="submit" onClick={this.sendDetails} value="Sign In"/>
        </form>
      </div>
      </div>
    );
  }

}

export default LoginPage;
