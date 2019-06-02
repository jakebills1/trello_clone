import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import { Switch, Route } from 'react-router-dom';
import FetchUser from './components/FetchUser';


function App() {
  return (
    <>
      <Navbar />
      <FetchUser>
        <Switch>
          <ProtectedRoute path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </FetchUser>
    </>
  );
}

export default App;
