import {useState} from 'react';

function Form(){
    // const [name, setName] = useState('Ahmet');
    // const [surname, setSurname] = useState('Can');

    const [form, setForm] = useState({name: "Ahmet", surname: "Can"});

    const changeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }



  return (
    <>
        {/* <input name='name' type="text" placeholder='Adınız' onChange={(e) => setName(e.target.value)}/>
        <input name='surname' type="text" placeholder='Soyadınız' onChange={(e) => setSurname(e.target.value)}/>
        <p>Merhaba, {name} {surname}</p> */}

        <input name='name' type="text" placeholder='Adınız' onChange={changeInput}/>
        <input name='surname' type="text" placeholder='Soyadınız' onChange={changeInput}/>
        <p>Merhaba, {form.name} {form.surname}</p>
    </>
    
  )
}

export default Form