const USERS_URL = 'http://localhost:3001/users';
export interface User {
  id: number;
  name: string;
  email: string;
}

export async function getUsers(): Promise<User[]> {
  const response = await fetch(USERS_URL);
  if (response.ok) {
    return response.json();
  }
  throw new Error('Bad network response.');
}

export async function deleteUser(id: number): Promise<void> {
  const response = await fetch(`${USERS_URL}/${id}`, {
    method: 'delete'
  });
}
