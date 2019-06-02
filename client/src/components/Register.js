import React, { Component, } from 'react';
import { AuthConsumer, } from '../providers/AuthProvider';
class Register extends Component {
  state = { email: "", password: "", passwordConfirmation: "" }
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation} = this.state;
    const { handleRegister, } =  this.props.auth;
    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation}, this.props.history);
    else
      alert("passwords no matchy");
  }
  handleChange = ({ target: { name, value, } }) => {
    this.setState({ [name]: value, })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Email</label>
        <input name="email" value={this.state.email} onChange={this.handleChange}/>
        <label>Password</label>
        <input name="password" value={this.state.password} type="password" onChange={this.handleChange}/>
        <label>Password Confirmation</label>
        <input 
          name="passwordConfirmation" 
          value={this.state.passwordConfirmation} 
          type="password" 
          onChange={this.handleChange}
        />
        <button type="submit">Register</button>
      </form>
    )
  }
}
export default class ConnectedRegister extends Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Register {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}

