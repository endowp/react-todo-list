import React, { useEffect, useState } from "react";
import { AddTodoForm } from "./AddTodoForm";
import { TodoList } from "./TodoList";
import Grid from "@mui/material/Grid";

//localStorage.clear()

const innitialTodos: Todo[] = [
  {
    text: "eat breakfast",
    complete: false,
    delete: false,
  },
  {
    text: "write app",
    complete: true,
    delete: false,
  },
];

function App() {
  const [todos, setTodos] = useState(innitialTodos);

  console.log("todos", todos);
  console.log("localStorage", localStorage);

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos") || ""));
    }
  }, []);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false, delete: false };
    setTodos([...todos, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  };

  return (
    <Grid container spacing={0} direction="column" alignItems="center">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </Grid>
  );
}

export default App;
