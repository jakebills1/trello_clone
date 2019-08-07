import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import { Switch, Route } from "react-router-dom";
import FetchUser from "./components/FetchUser";
import FetchData from "./components/FetchData";
import "./App.css";
import Container from "./components/Container";

function App() {
  return (
    <>
      <FetchUser>
        <Navbar />
        <FetchData>
          <Container>
            <Switch>
              <ProtectedRoute path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
            </Switch>
          </Container>
        </FetchData>
      </FetchUser>
    </>
  );
}

export default App;
