import React from "react";
import Card from "@mui/material/Card/Card";
import CardActionArea from "@mui/material/CardActionArea/CardActionArea";
import CardContent from "@mui/material/CardContent/CardContent";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Typography from "@mui/material/Typography/Typography";
import IconButton from "@mui/material/IconButton/IconButton";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import "./style.css";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <Card
      sx={{ mb: 2 }}
      className={`${
        todo.complete ? "complete-todo-item" : "not-complete-todo-item"
      }`}
      style={{ display: todo.delete ? "none" : undefined }}
    >
      <CardActionArea
        onMouseUp={() => {
          toggleTodo(todo);
        }}
      >
        <CardContent className="todo-item">
          <Typography variant="body1">
            <FormControlLabel
              control={<Checkbox color="default" />}
              checked={todo.complete}
              label={todo.text}
            />
          </Typography>

          <IconButton aria-label="delete">
            <DeleteIcon
              color="error"
              onMouseUp={() => {
                todo.delete = true;
              }}
            />
          </IconButton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
