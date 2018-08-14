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

    const loginDetails = {
        username:this.state.username,
      }

      fetch(`http://private-1cf21-versus3.apiary-mock.com/users/id`, {
        method: "GET"
      }).then(res => res.json())
      .then(data => console.log(data))

    }

    handleFormChange = (event) =>{
      this.setState({
        [event.target.name]:event.target.value
      })
    }

    render() {
      return (
        <div className="loginContainer">
          <h1> Login </h1>
          <div className="loginDetails">
            <form onSubmit={this.sendDetails}>
              Username <br/>
              <input type="text" value={this.state.username} onChange={this.handleFormChange} name="username" />
              <br/>
              password <br/>
              <input type="text" value={this.state.password} onChange={this.handleFormChange} name="password" />
              <br/>
              <input type="submit" value="Sign In"/>
            </form>
          </div>
          <br/>
          <a className="signUp" href=""> Sign up </a>
        </div>
      );
    }

  }

  export default LoginPage;
