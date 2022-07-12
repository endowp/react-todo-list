import React, { useState } from "react";
import { AddTodoForm } from "./AddTodoForm";
import { TodoList } from "./TodoList";
import Grid from "@mui/material/Grid";

const innitialTodos: Todo[] = [
  {
    text: "eat breakfast",
    complete: true,
    delete: false,
  },
  {
    text: "write app",
    complete: false,
    delete: false,
  },
];

function App() {
  const [todos, setTodos] = useState(innitialTodos);

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
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false, delete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <Grid container spacing={0} direction="column" alignItems="center">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </Grid>
  );
}

export default App;
