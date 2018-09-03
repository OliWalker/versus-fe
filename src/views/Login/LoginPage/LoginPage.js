import React, { Component } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn, getUserInfo } from '../../../redux/actions';

export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirect: false,
      loginError: false
    };
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.loginError && this.props.loginError) {
      this.loginRetry();
    }
  }

  loginRetry = () => {
    this.setState({ loginError: true });
    setTimeout(() => {
      this.setState({ loginError: false });
    }, 800);
  };

  sendDetails = event => {
    // const details = btoa(this.state.username + ':' + this.state.password);
    // const loginDetails = { Authorization: `Basic ${details}` };
    // this.props.logIn(loginDetails);
    this.props.getUserInfo(1);
  };

  handleFormChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const loginClass = this.state.loginError ? 'Error' : '';
    return (
      <div className="loginContainer">
        <img className="logo" src="/backgrounds/logo.png" alt="App logo" />

        <div className={`loginDetails ${loginClass}`}>
          <form>
            <input
              type="text"
              value="Guest!"
              onChange={this.handleFormChange}
              name="username"
              placeholder="Username"
            />
            <input
              type="password"
              value=""
              onChange={this.handleFormChange}
              name="password"
              placeholder="Password"
            />
          </form>
        </div>

        <div className="organize">
          <div className="submit" onClick={this.sendDetails}>
            Demo The App
          </div>

          <div className="SignUp">
            {/* <Link to="/SignUp">
              New user? <strong> Sign up. </strong>
            </Link> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginError: state.loginError
});

const mapDispatchToProps = dispatch => ({
  logIn: details => dispatch(logIn({ endpoint: '/login', headers: details })),
  getUserInfo: user_id =>
    dispatch(getUserInfo({ endpoint: `/users/${user_id}` }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
