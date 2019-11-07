import React from 'react';
import Home from './Home';
import Nav from './Nav';
import Users from './Users';
import ManageUser from './ManageUser';
import { Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <>
      <Nav />
      <Route path="/" component={Home} exact />
      <Route path="/users" component={Users} />
      <Route path="/user/:id?" component={ManageUser} />
    </>
  );
}

export default App;
