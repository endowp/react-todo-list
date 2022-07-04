import Checkbox from "@mui/material/Checkbox/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Typography from "@mui/material/Typography/Typography";
import React from "react";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <Typography variant="body1" gutterBottom>
        <label
          style={{ textDecoration: todo.complete ? "line-through" : undefined }}
        >
          <FormControlLabel
            control={<Checkbox />}
            checked={todo.complete}
            onClick={() => {
              toggleTodo(todo);
            }}
            label={todo.text}
          />
        </label>
      </Typography>
    </li>
  );
};
