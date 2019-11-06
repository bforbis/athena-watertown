import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

function App(): JSX.Element {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Cory', email: 'a@h.com' },
    { id: 2, name: 'Megan', email: 'b@h.com' },
    { id: 3, name: 'Tami', email: 'c@h.com' }
  ]);

  const h1Style: React.CSSProperties = {
    color: 'red',
    marginBottom: 20
  };

  function handleDelete(id: number): void {
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
  }

  return (
    <>
      <h1 className="header" style={h1Style}>
        Users
      </h1>
      <ul>
        {users.map(user => (
          <li>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
            {user.name}
          </li>
        ))}
      </ul>
      <label htmlFor="firstName">FirstName</label>
      <input id="firstName" type="text"></input>
      <p>My app</p>
    </>
  );
}

export default App;
