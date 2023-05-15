import {useState} from 'react'

function App() {

  const [name, setName] = useState('Kübra');
  const [friends, setFriends] = useState(['Ahmet', 'Mehmet', 'Ayşe']);
  const [address, setAddress] = useState({title: 'Kayseri', zip: 38000})

  return (
    <div>
      Merhaba {name}
      <button onClick={() => setName("Ahmet")}>Değiştir</button>

      <br /> <hr />

      <p>Arkadaşlar</p>
      <ul>
        {
          friends.map((f, i) => (
            <li key={i}>{f}</li>
        ))
        }
      </ul>
      <button onClick={() => setFriends([...friends,"Kübra"])}>Ekle</button>

      <br /> <hr />

      <p>Adres</p>
      {`Adresim ${address.title}, ${address.zip}.`}

      {/* <button onClick={() => setAddress({title: 'Ankara', zip: 6000})}>İkinci Adres</button> */}
      <button onClick={() => setAddress({...address, title: 'Ankara'})}>İkinci Adres</button>
    </div>
  );
}

export default App;