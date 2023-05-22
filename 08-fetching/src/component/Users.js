import {useEffect, useState} from 'react'
import axios from 'axios'

const Users = () => {

    // fetch
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     // .then(response => response.json())
    //     // .then(data => setUsers(data))
    //     // .catch(error => console.log(error))
    //     // .finally(() => setIsLoading(false));

    //     .then(response => response.json())
    //     .then(data => {
    //         setUsers(data);
    //         setIsLoading(false);
    //     })

    // }, []);
    
    // axios

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then(data => {
            setUsers(data.data);
            setIsLoading(false);
        })

    }, []);

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

  return (
    <>
        <h1>Users</h1>

        {isLoading && <p>Loading...</p>}
            {users.map(user => (
                <div key={user.id}>{user.name}</div>
            ))}
    </>
  )
}

export default Users