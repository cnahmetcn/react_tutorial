import React from "react";
import { useState } from "react";
import "../../App.css";

function List({ todos, setTodos }) {
  const [filter, setFilter] = useState("all");

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const deleteDones = () => {
    const newTodos = [];
    todos.forEach((todo) => {
      if (!todo.done) {
        newTodos.push(todo);
      }
    });
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") {
      return true;
    } else if (filter === "done") {
      return todo.done;
    } //if (filter === "active") {
    else return !todo.done;
    //}
  });

  return (
    <div className="list">
      <div>
        <ul>
          {filteredTodos.map((todo, index) => (
            <li key={index}>
              <input
                className="chckBtn"
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleDone(index)}
              />
              <span className="todo">{todo.text}</span>
              <button className="dltBtn" onClick={() => deleteTodo(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="buttons">
        <span className="count">{todos.length} left</span>
        <button onClick={() => setFilter("all")}>All Todos</button>
        <button onClick={() => setFilter("done")}>Done Todos</button>
        <button onClick={() => setFilter("active")}>Active Todos</button>
        <button onClick={() => deleteDones()}>clear completed</button>
      </div>
    </div>
  );
}

export default List;