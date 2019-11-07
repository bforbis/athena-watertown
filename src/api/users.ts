export interface User {
  id: number;
  name: string;
  email: string;
}

export async function getUsers(): Promise<User[]> {
  const response = await fetch('/api/users');
  if (response.ok) {
    return response.json();
  }
  throw new Error('Bad network response.');
}

export async function deleteUser(id: number): Promise<void> {
  const response = await fetch(`/api/users/${id}`, {
    method: 'delete'
  });
  if (response.ok) {
    return response.json();
  }
  throw new Error('Bad network response.');
}

export async function addUser(user: Omit<User, 'id'>): Promise<User> {
  const response = await fetch(`/api/users`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  if (response.ok) {
    return response.json();
  }
  throw new Error('Bad network response.');
}
