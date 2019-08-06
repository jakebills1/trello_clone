import React from "react";
import { AuthConsumer } from "../providers/AuthProvider";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

class Navbar extends React.Component {
  render() {
    const { user, handleLogout } = this.props.auth;
    if (user) {
      return (
        <NavLinkWrapper>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <li>Home</li>
          </Link>
          <li onClick={() => handleLogout(this.props.history)}>Logout</li>
        </NavLinkWrapper>
      );
    } else {
      return (
        <NavLinkWrapper>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/register">
            <li>Register</li>
          </Link>
        </NavLinkWrapper>
      );
    }
  }
}
export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Navbar {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}
export default withRouter(ConnectedNavbar);
const NavLinkWrapper = styled.ul`
  list-style: none;
  color: black;
  text-decoration: none;
`;
