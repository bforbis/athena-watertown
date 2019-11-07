import React, { useState } from 'react';
import { User } from './api/users';
import { addUser } from './api/users';
import { Redirect } from 'react-router-dom';

const ManageUser = (): JSX.Element => {
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
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            id="name"
            type="text"
            value={user.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            type="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <input type="submit" value="Add User" />
      </form>
    </>
  );
};

export default ManageUser;
