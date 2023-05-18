import { useState, useEffect } from "react";

const initialValues = { fullname: "", phonenumber: "" };

const Form = ({addContact, contacts}) => {
  const [form, setForm] = useState(initialValues);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // contact değişmiş ise formu temizle
  // useEffect(() => {
  //   setForm(initialValues);
  // }, [contacts]);

  const onSubmit = (e) => {
    e.preventDefault();

    if(form.fullname === '' || form.phonenumber===''){
      return false;
    }

    addContact([...contacts, form]);
    setForm(initialValues);
  };
  return (
      <form onSubmit={onSubmit}>
    <div>
        <input
          name="fullname"
          type="text"
          value={form.fullname}
          placeholder="Adınız"
          onChange={onChangeInput}
        />{" "}
        <br />
        <input
          name="phonenumber"
          type="text"
          value={form.phonenumber}
          placeholder="Telefon"
          onChange={onChangeInput}
        />{" "}
        <br />
        <div className="btn">
          <button onClick={onSubmit}>Ekle</button>
        </div>
    </div>
      </form>
  );
};

export default Form;
