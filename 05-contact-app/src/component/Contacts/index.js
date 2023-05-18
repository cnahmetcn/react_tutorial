import {useState, useEffect} from 'react'
import './style.css';

import List from "./List"
import Form from "./Form"

const Contacts = () => {

  // Formdan eklenen elemanların List e gönderilmesi için state i Contact 
  // sayfasında oluşturuyoruz. state elemanlarını da props olarak gerekli
  // componentlere gönderiyoruz.

  const [contacts, setContacts] = useState([
    {
      fullname: 'Ahmet',
      phonenumber: 111
    },
    {
      fullname: 'Kübra',
      phonenumber: 222
    },
  ]);

  useEffect(() => {
    console.log(contacts)
  }, [contacts])

  return (
    <div id='container'>
      <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts