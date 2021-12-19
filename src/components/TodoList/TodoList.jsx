import React from "react";
import "./TodoList.scss";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos, editTodo, removeTodo }) => {
  return (
    <div className="todos-main">
      <ul className="todos-list">
        {todos.map((todo, i) => {
          return (
            <TodoItem
              key={i}
              todo={todo}
              editTodo={editTodo}
              removeTodo={removeTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
