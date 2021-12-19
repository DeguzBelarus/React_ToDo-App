import React, { useRef, useEffect } from "react";
import "./TodoHeader.scss";

const TodoHeader = ({ todos, addTodo }) => {
  const inputRef = useRef(null);

  const createTodo = (event) => {
    event.preventDefault();

    if (inputRef.current.value == "") {
      return;
    }

    const todoObj = {
      id: new Date().getTime(),
      title: inputRef.current.value,
      completed: false,
    };

    addTodo(todoObj);

    inputRef.current.value = "";
  };

  return (
    <div className="todo-header">
      <form className="todo-form" onSubmit={createTodo}>
        <input className="todo-text" type="text" ref={inputRef} />
        <button className="todo-addbutton" type="submit">
          Add the Task!
        </button>
      </form>
    </div>
  );
};

export default TodoHeader;
