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
    const loginClass = this.state.loginError ? 'Error' : '';
    return (
      <div className="background">
        <div className="loginContainer">
          <h1> Welcome to Versus </h1>

          <div className={`loginDetails ${loginClass}`}>
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

const mapStateToProps = state => ({
  loginError: state.loginError
});

const mapDispatchToProps = dispatch => ({
  logIn: details => dispatch(logIn({ endpoint: '/login', headers: details }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
