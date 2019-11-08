import React, { useState, useEffect } from 'react';
import Home from './Home';
import Nav from './Nav';
import Users from './Users';
import ManageUser from './ManageUser';
import { Route } from 'react-router-dom';
import { User, getUsers, deleteUser, addUser } from './api/users';

function App(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then(_users => setUsers(_users));
  }, []);

  async function handleDelete(id: number): Promise<void> {
    await deleteUser(id);
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
  }

  async function addNewUser(user: Omit<User, 'id'>): Promise<void> {
    const newUser = await addUser(user);
    setUsers([...users, newUser]);
  }

  return (
    <>
      <Nav />
      <Route path="/" component={Home} exact />
      <Route
        path="/users"
        render={props => <Users users={users} deleteUser={handleDelete} />}
      />
      <Route
        path="/user/:id?"
        render={props => <ManageUser addNewUser={addNewUser} />}
      />
    </>
  );
}

export default App;
