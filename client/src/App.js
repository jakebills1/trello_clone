import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import BoardView from "./components/BoardView";
import ProtectedRoute from "./components/ProtectedRoute";
import { Switch, Route } from "react-router-dom";
import FetchUser from "./components/FetchUser";
import "./App.css";

function App() {
  return (
    <>
      <FetchUser>
        <Navbar />
        <Switch>
          <ProtectedRoute path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <ProtectedRoute path="/boards/:id" component={BoardView} />
        </Switch>
      </FetchUser>
    </>
  );
}

export default App;
