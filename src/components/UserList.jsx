import { useState, useEffect } from "react";
import axios from "axios";

const baseURl = 'https://jsonplaceholder.typicode.com/users'

export default function UserList() {
    const [users, setUsers] = useState([]);
    
useEffect(() => {
    axios.get(baseURl).then((response) => {
        setUsers(response.data);
    })
}, []);
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}