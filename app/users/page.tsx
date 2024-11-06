import React from 'react'

interface User{
    id: number;
    url: string;
}


const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const users: User[] = await res.json();
 const limitedUsers = users.slice(0, 3);

    return (
        <>
            <h1>Users</h1>
            <ul>
                {limitedUsers.map(user => (
                        <li key={user.id}>
                            <img src={user.url} alt={`User ${user.id}`} style={{ maxWidth: '100%', height: 'auto' }} />
                        </li>
                ))}
            </ul>
        </>
  )
}

export default UsersPage
