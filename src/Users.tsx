import React, { useState, useEffect } from 'react';
import { User, getUsers, deleteUser } from './api/users';
import { Link } from 'react-router-dom';

function Users(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then(_users => setUsers(_users));
  }, []);

  const h1Style: React.CSSProperties = {
    color: 'red',
    marginBottom: 20
  };

  async function handleDelete(id: number): Promise<void> {
    await deleteUser(id);
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
  }

  return (
    <>
      <h1 className="header" style={h1Style}>
        Users
      </h1>
      <Link to="/user">Add User</Link>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Users;
