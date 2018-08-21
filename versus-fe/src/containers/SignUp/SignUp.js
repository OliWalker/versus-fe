import React, { Component } from 'react';
import './SignUp.css'

import { connect } from 'react-redux';
import { Redirect } from 'react-router'
import { createUser } from '../../redux/actions';


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

  componentDidUpdate(prevProps){
    if (this.props.user !== prevProps.user) {

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

      this.props.createNewUser({
        endpoint:'/users/id',
        method: 'POST',
        body: signUpDetails
      })

    }

    handleFormChange = (event) => {
      this.setState({
        [event.target.name]:event.target.value
      })
    }

    renderInput = (label, type ,name) => {
      return (
        <div className="divider">
          <span> {label} </span>
          <input className="inputField" type={type} onChange={this.handleFormChange} name={name}/>
        </div>
      )
    }


  render() {
    return (
      <div className="signUpContainer">

        <div className="title">
          <h1> Sign Up </h1>
        </div>

        <div className="signUpFormContainer">
          <form className="signUpForm" >
            {this.renderInput("Username", "text", "username")}
            {this.renderInput("First Name", "text", "first_name")}
            {this.renderInput("Email", "text", "email")}
          </form>
        </div>

        <div className="SignUpButton" onClick={this.sendSignUp}>
          <text> Register </text>
        </div>

      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => ({
  createNewUser: (apiInfo) => dispatch(createUser(apiInfo))
})

const mapStateToProps = (state) => ({
  user: state.user,
  error: state.error
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
