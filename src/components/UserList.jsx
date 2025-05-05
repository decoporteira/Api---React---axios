import  getUsers from '../components/Api'


export default function UserList() {
  const { users, loading, error } = getUsers();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
  return (
   
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}