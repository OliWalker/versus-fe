import React, { Component } from 'react';
import './SignUp.css'


class SignUp extends Component {
  constructor(props){
    super(props)
    this.state = {
      username:'',
      first_name:'',
      email:'',
      image_Path:''
    }
  }
    sendSignUp = (event) => {
      event.preventDefault()

      let signUpDetails = {
        first_name:this.state.first_name,
        username:this.state.username,
        email:this.state.email,
        image_Path:this.state.image_Path
      }

      fetch(`http://private-1cf21-versus3.apiary-mock.com/user/`, {
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

    handleFirst_nameChange =  (event) => {
      this.setState({first_name: event.target.value})
    }

    handleEmailChange =  (event) => {
      this.setState({email: event.target.value})
    }

    handleImage_PathChange =  (event) => {
      this.setState({image_Path: event.target.value})
    }

  render() {
    return (
      <div>
        <h1> Sign Up </h1>
        <form onSubmit={this.sendSignUp}>

          <div className="divider">
            <span> Username </span>
            <input type="text" onChange={this.handleUsernameChange}value={this.state.username}/>
          </div>

          <div className="divider">
            <span> First Name </span>
            <input type="text" onChange={this.handleFirst_nameChange}value={this.state.first_name}/>
          </div>

          <div className="divider">
            <span> Email </span>
            <input type="text" onChange={this.handleEmailChange}value={this.state.email}/>
          </div>

          <div className="divider">
            <span> Profile Image </span>
            <input type="text" onChange={this.handleImage_PathChange}value={this.state.image_path}/>
          </div>

          <input type="submit" value="Sign Up"/>
        </form>
      </div>
    );
  }

}

export default SignUp;
