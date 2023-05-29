import {useEffect, useState} from 'react'
import axios from 'axios'

const Async = () => {

    useEffect(() => {
        // axios('https://jsonplaceholder.typicode.com/users')
        // .then(res => {
        //     setUsers(res.data);
        //     axios(`https://jsonplaceholder.typicode.com/posts?userId=${res.data[0].id}`)
        //         .then(res => {
        //             setPosts(res.data);
        //         })
        // })
        getData();

    }, []);

    // Üstteki ifade de alt alta tüm verileri çekmek istiyoruz. Önce usersdan verileri çekip 
    // daha sonra gelen sonuca göre tekrar istek gönderip postu çekiyiruz. 

    // Alttaki ifade de ise async await kullanarak daha temiz bir kod yazıyoruz. Bu işlemde await ile 
    // işlemin bitmesini kod kendi bekliyor ve tamamlandıktan sonra diğer işleme geçiyor.

    const getData = async () => {
        const {data: users} = await axios('https://jsonplaceholder.typicode.com/users');  
        const {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`);
        
        setUsers(users);
        setPosts(posts);
        setIsLoading(false);
    }

    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


  return (
    <>
        <h2>Users</h2>

        {isLoading && <p>Loading...</p>}
            {users.map(user => (
                <div key={user.id}>{user.name}</div>
            ))}

        <h2>Post</h2>

            {posts.map(post => (
                <div key={post.id}>{post.title}</div>
            ))}
    </>
  )
}

export default Async