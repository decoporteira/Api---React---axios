import { useState, useEffect } from "react";
import axios from "axios";

const baseURl = 'https://jsonplaceholder.typicode.com/users'

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        axios.get(baseURl).then((response) => {
            setUsers(response.data);
            setLoading(false);
        }).catch((error) => {
            setError('Error ao solicitar dados');
            setLoading(false);
        })
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

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