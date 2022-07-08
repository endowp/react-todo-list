import React from "react";
import { TodoListItem } from "./TodoListItem";
import Typography from "@mui/material/Typography/Typography";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <div>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h3" component="div">
        Todo List
      </Typography>
      <Grid>
        <List style={{ overflow: "auto" }}>
          {todos.map((todo) => (
            <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
          ))}
        </List>
      </Grid>
    </div>
  );
};
