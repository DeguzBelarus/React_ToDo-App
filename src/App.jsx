import { useState, useEffect } from "react";
import "./App.scss";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoList from "./components/TodoList/TodoList";

function App() {
  let todosSave = JSON.parse(localStorage.getItem("todossave"));

  const [todos, setTodos] = useState(todosSave || []);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoId) => {
    const filteredTodos = todos.filter((element) => element.id !== todoId);

    setTodos(filteredTodos);
  };

  const editTodo = (updatedTodo) => {
    const newTodos = todos.map((element) => {
      if (element.id === updatedTodo.id) {
        return updatedTodo;
      } else {
        return element;
      }
    });

    setTodos(newTodos);
  };

  useEffect(() => {
    if (todos.length) return;
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
      });
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("todossave", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <TodoHeader todos={todos} addTodo={addTodo} />
      <TodoList todos={todos} editTodo={editTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
