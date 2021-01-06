import { Button } from "@material-ui/core";
import React, { Component } from "react";
import auth from "./../auth/initAuth";
import Typography from "./atoms/Typography/Typography";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }
  _handleSubmit = (e, data) => {
    e.preventDefault();
    auth.login(this.state.email, this.state.password);
  };
  _handleLoginWithGoogle = (e) => {
    e.preventDefault();
    auth.loginWithGoogle();
  };
  _handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  _handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };
  _logout = () => {
    auth.logout();
    //this.props._refresh();
    window.location.reload();
  };
  _renderLoginForm = () => {
    return (
      <div>
        <form className="commentForm" onSubmit={this._handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={this._handleEmailChange}
          />
          <input
            type="password"
            placeholder="Enter a password"
            onChange={this._handlePasswordChange}
          />
          <input type="submit" value="Login" />
          <button onClick={this._handleLoginWithGoogle}>google</button>
        </form>
        <p></p>
      </div>
    );
  };
  _renderLogout = () => {
    return (
      <div onClick={this._logout}>
        <Typography mode="link" variant="h6">
          Log-out
        </Typography>
      </div>
    );
  };
  render() {
    return (
      <div>
        {auth.loggedIn() ? this._renderLogout() : this._renderLoginForm()}
      </div>
    );
  }
}
export default Login;
