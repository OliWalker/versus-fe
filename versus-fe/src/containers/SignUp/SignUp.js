import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      first_name: '',
      email: '',
      image_Path: ''
    };
  }
  sendSignUp = event => {
    event.preventDefault();
    const signUpDetails = {
      username: this.state.username,
      first_name: this.state.first_name,
      email: this.state.email,
      image_Path: this.state.image_Path
    };

    fetch(`http://private-1cf21-versus3.apiary-mock.com/users/id`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(signUpDetails)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  handleFormChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  renderInput = (label, type, name) => {
    return (
      <div className="divider">
        {/*<span> {label} </span>*/}
        <input
          className="inputField"
          type={type}
          onChange={this.handleFormChange}
          name={name}
          placeholder={label}
        />
      </div>
    );
  };

  render() {
    return (
      <div className="signUpContainer">
       <img className="logo" src="backgrounds/logo.png" alt="App logo"/>
        <div className="title">
          <h3> Sign Up </h3>
        </div>
        <div className="signUpFormContainer">
          <form className="signUpForm">
            {this.renderInput('Username', 'text', 'username')}
            {this.renderInput('First name', 'text', 'first_name')}
            {this.renderInput('Email', 'text', 'email')}
          </form>
        </div>
        <div className="SignUpButton" onClick={this.sendSignUp}>
          Register
        </div>
        <div className="SignUp">
          <Link to="/"> Returning? <strong>Login.</strong> </Link>
        </div>
      </div>
    );
  }
}

export default SignUp;
