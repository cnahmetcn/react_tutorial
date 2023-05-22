import React from "react";
import "../../App.css";

function Form({ setTodos, todos }) {
  const formSubmit = (e) => {
    e.preventDefault();
    //e.target = <form>...</form>  e.target.input=<input/> target ın altındakilerden name i input olan ı yakalıyor
    setTodos([...todos, { text: e.target.input.value, done: false }]);
    e.target.input.value = "";
  };

  return (
    <div className="form">
      <form onSubmit={formSubmit} className="formWidth">
        <input
          type="checkbox"
          onChange={(e) => {
            const newTodos = [...todos];
            newTodos.map((todo) => (todo.done = e.target.checked));
            setTodos(newTodos);
          }}
        />
        <input
          className="input"
          name="input"
          placeholder="What needs to be done?"
        />
      </form>
    </div>
  );
}

export default Form;
