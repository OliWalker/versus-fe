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
        <div className="background">

          <div className="loginContainer">

            <h1> Welcome to Versus </h1>

            <div className="loginDetails">

              <form onSubmit={this.sendDetails}>
                <span>  Username  </span>
                <input type="text" value={this.state.username} onChange={this.handleFormChange} name="username" />

                <span>  Password </span>
                <input type="text" value={this.state.password} onChange={this.handleFormChange} name="password" />
              </form>

            </div>

            <div className="submit">
              <text> Sign In </text>
            </div>

            <div className="Sign Up">
              <a href="/SignUp"> Sign Up if you have do not have an account </a>
            </div>
          </div>

        </div>
      );
    }

  }

  export default LoginPage;
