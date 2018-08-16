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

      const signUpDetails = {
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
      this.setState({
        [event.target.name]:event.target.value
      })
    }

    renderInput = (label, name) => {
      return(
        <div className="divider">
          <span> {label} </span>
          <input className="inputField" type="text" onChange={this.handleFormChange} name={name}/>
        </div>
      )
    }

  render() {

    return (
      <div className="signUpContainer">
        <h1> Sign Up </h1>
        <div className="signUpFormContainer">
          <form className="signUpForm" onSubmit={this.sendSignUp}>

            {this.renderInput("Username","username")}
            {this.renderInput("First Name","first_name")}
            {this.renderInput("Email","email")}

            <input type="submit" value="Sign Up"/>
          </form>
        </div>
      </div>
    );
  }

}

export default SignUp;
