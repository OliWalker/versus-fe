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
        username:this.state.username,
        first_name:this.state.first_name,
        email:this.state.email,
        image_Path:this.state.image_Path
      }

      fetch(`http://private-1cf21-versus3.apiary-mock.com/users/id`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(signUpDetails)
      }).then(res => res.json())
      .then(data => console.log(data))

    }

    handleFormChange = (event) => {
      if(event.target.name === "username") this.setState({username: event.target.value})
      if(event.target.name === "firstname") this.setState({first_name: event.target.value})
      if(event.target.name === "email") this.setState({email: event.target.value})
      if(event.target.name === "image_Path") this.setState({image_Path: event.target.value})
    }


  render() {
    return (
      <div className="signUpContainer">
        <h1> Sign Up </h1>
        <div className="signUpFormContainer">
          <form className="signUpForm" onSubmit={this.sendSignUp}>

            <div className="divider">
              <span> Username </span>
              <input className="inputField" type="text" onChange={this.handleFormChange} name="username"/>
            </div>

            <div className="divider">
              <span> First Name </span>
              <input className="inputField" type="text" onChange={this.handleFormChange} name="firstName"/>
            </div>

            <div className="divider">
              <span> Email </span>
              <input className="inputField" type="text" onChange={this.handleFormChange} name="Email"/>
            </div>

            <div className="divider">
              <span> Profile Image </span>
              <input className="inputField" type="text" onChange={this.handleFormChange} name="image_Path"/>
            </div>

            <input type="submit" value="Sign Up"/>
          </form>
        </div>
      </div>
    );
  }

}

export default SignUp;
