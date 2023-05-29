import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UserList = ({setActiveUserId}) => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res => {setUsers(res.data);})
    .finally(() => {setLoading(false)});

}, []);

  return (
    <>
    <h3>Kullanıcılar</h3>

    {loading && <p>Loading...</p>}

    <ul className='user-list'>
    {
      users.map((user) => (
        <li key={user.id} onClick={() => setActiveUserId(user.id)}>{user.name}</li>
      ))
    }
    </ul>
    </>
  )
}

export default UserList