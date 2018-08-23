import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { createUser } from '../../redux/actions';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      first_name: '',
      last_name: '',
      password: '',
      email: '',
      user_image_path: '',
      signedUp: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      console.log('yes ');
      this.setState({ signedUp: true });
    }
  }
  sendSignUp = event => {
    event.preventDefault();

    const signUpDetails = {
      username: this.state.username,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      password: this.state.password,
      email: this.state.email,
      user_image_path: this.state.user_image_path
    };

    this.props.createNewUser({
      endpoint: `/users/`,
      method: 'POST',
      body: signUpDetails
    });
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
  renderProfile = () => {
    if (this.state.signedUp) {
      console.log('yes NUMERO DOS ');
      return <Redirect to="/profile" />;
    }
  };

  render() {
    return (
      <div className="signUpContainer">
        <img className="logo" src="backgrounds/logo.png" alt="App logo" />

        <div className="title">
          <h3> Sign Up </h3>
        </div>

        <div className="signUpFormContainer">
          <form className="signUpForm">
            {this.renderInput('Username', 'text', 'username')}
            {this.renderInput('First Name', 'text', 'first_name')}
            {this.renderInput('Last Name', 'text', 'last_name')}
            {this.renderInput('Password', 'text', 'password')}
            {this.renderInput('Email', 'text', 'email')}
          </form>
        </div>

        <div className="SignUpButton" onClick={this.sendSignUp}>
          Register
        </div>
        <div className="SignUp">
          <Link to="/">
            {' '}
            Returning? <strong>Login.</strong>{' '}
          </Link>
        </div>

        {this.renderProfile()}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createNewUser: apiInfo => dispatch(createUser(apiInfo))
});

const mapStateToProps = state => ({
  user: state.user,
  error: state.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
