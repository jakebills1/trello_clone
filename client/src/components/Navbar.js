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
          <Navitem as={Link} to="/"> 
            Home
          </Navitem>
          <Navitem onClick={() => handleLogout(this.props.history)}>Logout</Navitem>
        </NavLinkWrapper>
      );
    } else {
      return (
        <NavLinkWrapper>
          <Navitem>
            <Link to="/">Home</Link>
          </Navitem>
          <Navitem>
            <Link to="/login">Login</Link>
          </Navitem>
          <Navitem>
            <Link to="/register">Register</Link>
          </Navitem>
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
  list-style-type: none;
  color: black;
  text-decoration: none;
  margin: 0;
  padding: 0;
  background-color: #0079bf;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Navitem = styled.li`
  &:hover {
    background-color: #5ba4cf;
  }
`;
