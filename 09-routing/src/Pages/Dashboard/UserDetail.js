import React, {useEffect, useState} from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'

const UserDetail = () => {
    const {id} = useParams();
    const location = useLocation();
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => setUser(data))
    }, [id]);
  return (
    <div>
        <h2>UserDetail</h2>
        <p>Ad: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Telefon: {user.phone}</p>

        {user.id > 1 && <Link to={`/users/${Number(id) - 1}`}>Önceki Kullanıcı</Link>}
         - 
        {user.id !== 10 && <Link to={`/users/${Number(id)+ 1}`}>Sonraki Kullanıcı</Link>}

        {/* <pre>
            {JSON.stringify(user, null, 2)}
        </pre> */}

        {
            location.state && <p>Location State: {location.state.name}</p>
        }
    
    </div>
  )
}

export default UserDetail