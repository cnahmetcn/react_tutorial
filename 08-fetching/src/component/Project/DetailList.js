import React, {useState, useEffect} from 'react'
import axios from 'axios'

const DetailList = ({activeUserId}) => {

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios(`https://jsonplaceholder.typicode.com/users/${activeUserId}`)
    .then(res => {setUser(res.data);})
    .finally(() => {setLoading(false)});

}, [activeUserId]);

  return (
    <div>
      <h3>Kullanıcı Detayı</h3>

      {loading && <p>Loading...</p>}

      {
        !loading && <pre> {JSON.stringify(user, null, 2)} </pre>
      }
    </div>
  )
}

export default DetailList