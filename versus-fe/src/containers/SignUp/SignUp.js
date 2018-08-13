import React, { Component } from 'react';
import './SignUp.css'


class SignUp extends Component {
  constructor(props){
    super(props)
    this.state = {
      username:'',
      firstname:'',
      lastname:'',
      password:''
    }
  }
    sendSignUp = (event) => {
      event.preventDefault()

      let signUpDetails = {
        username:this.state.username ,
        firstname:this.state.firstname,
        lastname:this.state.lastname,
        password:this.state.password
      }

      fetch('http://localhost:3000/loginDetails', {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(signUpDetails)
      })
    }


    handleUsernameChange =  (event) => {
      this.setState({username: event.target.value})
    }

    handleFirstnameChange =  (event) => {
      this.setState({firstname: event.target.value})
    }

    handleLastnameChange =  (event) => {
      this.setState({lastname: event.target.value})
    }

    handlePasswordChange =  (event) => {
      this.setState({password: event.target.value})
    }

  render() {
    return (
      <div>
        <h1> Sign Up </h1>
        <form onSubmit={this.sendSignUp}>

          <div className="divider">
            <span> Username </span>
            <input type="text" value={this.state.username}/>
          </div>

          <div className="divider">
            <span> firstname </span>
            <input type="text" value={this.state.firstname}/>
          </div>

          <div className="divider">
            <span> lastname </span>
            <input type="text" value={this.state.lastname}/>
          </div>

          <div className="divider">
            <span> password </span>
            <input type="text" value={this.state.password}/>
          </div>

          <input type="submit" value="Sign Up"/>
        </form>
      </div>
    );
  }

}

export default SignUp;
