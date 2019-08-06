import React, { Component } from "react";
import { AuthConsumer } from "../providers/AuthProvider";
class Login extends Component {
  state = { email: "", password: "" };
  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { handleLogin } = this.props.auth;
    handleLogin({ email, password }, this.props.history);
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Email</label>
        <input
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <label>Password</label>
        <input
          name="password"
          value={this.state.password}
          type="password"
          onChange={this.handleChange}
        />
        <button type="submit">Login</button>
      </form>
    );
  }
}
export default class ConnectedLogin extends Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}
