import React, { useRef, useEffect } from "react";
import "./TodoItem.scss";

const TodoItem = ({ todo, editTodo, removeTodo }) => {
  const toDoContaiber = useRef();
  const toDoText = useRef();
  const toDoCompleteLabel = useRef();

  useEffect(() => {
    if (todo.completed) {
      toDoContaiber.current.classList.add("todo-completed-container");
      toDoText.current.classList.add("todo-completed-text");
      toDoCompleteLabel.current.classList.add("todo-completed-label");
    } else {
      if (
        toDoContaiber.current.classList.contains("todo-completed-container")
      ) {
        toDoContaiber.current.classList.remove("todo-completed-container");
      }

      if (toDoText.current.classList.contains("todo-completed-text")) {
        toDoText.current.classList.remove("todo-completed-text");
      }

      if (
        toDoCompleteLabel.current.classList.contains("todo-completed-label")
      ) {
        toDoCompleteLabel.current.classList.remove("todo-completed-label");
      }
    }
  });

  const handleChange = () => {
    todo.completed = !todo.completed;
    editTodo(todo);

    if (todo.completed) {
      toDoContaiber.current.classList.add("todo-completed-container");
      toDoText.current.classList.add("todo-completed-text");
      toDoCompleteLabel.current.classList.add("todo-completed-label");
    } else {
      if (
        toDoContaiber.current.classList.contains("todo-completed-container")
      ) {
        toDoContaiber.current.classList.remove("todo-completed-container");
      }

      if (toDoText.current.classList.contains("todo-completed-text")) {
        toDoText.current.classList.remove("todo-completed-text");
      }

      if (
        toDoCompleteLabel.current.classList.contains("todo-completed-label")
      ) {
        toDoCompleteLabel.current.classList.remove("todo-completed-label");
      }
    }
  };

  const handleDelete = () => {
    removeTodo(todo.id);
  };

  return (
    <li className="todo" ref={toDoContaiber}>
      <p className="todo-text" ref={toDoText}>
        {todo.title}
      </p>

      <div className="options">
        <label className="checkbox-label" ref={toDoCompleteLabel}>
          <input
            className="checkbox"
            type="checkbox"
            checked={todo.completed}
            onChange={handleChange}
          />
          DONE
        </label>
        <button className="delete-button" onClick={handleDelete}>
          DELETE
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
