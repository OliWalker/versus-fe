import React, { Component } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from '../../redux/actions';

export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirect: false
    };
  }

  sendDetails = event => {
    const loginDetails = [
      { username: this.state.username },
      { password: this.state.password }
    ];
    this.props.logIn(loginDetails);
  };

  handleFormChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="background">
        <div className="loginContainer">
          <h1> Welcome to Versus </h1>

          <div className="loginDetails">
            <form>
              <span> Username </span>
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleFormChange}
                name="username"
              />
              <span> Password </span>
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleFormChange}
                name="password"
              />
            </form>
          </div>

          <div className="organize">
            <div className="submit" onClick={this.sendDetails}>
              Sign In
            </div>

            <div className="SignUp">
              <Link to="/SignUp"> Sign Up for an account </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  logIn: details => dispatch(logIn({ endpoint: '/login', headers: details }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
