import React, { useState } from 'react';
import { User } from './api/users';
import { addUser } from './api/users';
import { Redirect, useRouteMatch } from 'react-router-dom';
import Input from './Input';

const ManageUser: React.FC = () => {
  const match = useRouteMatch<{ userId: string }>();
  const userId = match ? match.params.userId : undefined;

  const [user, setUser] = useState<Omit<User, 'id'>>({ name: '', email: '' });
  const [saveCompleted, setSaveCompleted] = useState(false);

  async function handleSubmit(event: React.FormEvent): Promise<void> {
    event.preventDefault(); // Stop browser from posting
    if (user.email && user.name) {
      await addUser(user);
      setUser({ name: '', email: '' });
      setSaveCompleted(true);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setUser({ ...user, [event.target.id]: event.target.value });
  }

  return (
    <>
      {saveCompleted && <Redirect to="/users" />}
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <Input
          id="name"
          label="Name"
          value={user.name}
          onChange={handleChange}
        />
        <Input
          id="email"
          label="Email"
          type="email"
          value={user.email}
          onChange={handleChange}
        />
        <input type="submit" value="Add User" />
      </form>
    </>
  );
};

export default ManageUser;
