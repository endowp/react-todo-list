import React from "react";
import Card from "@mui/material/Card/Card";
import CardActionArea from "@mui/material/CardActionArea/CardActionArea";
import CardContent from "@mui/material/CardContent/CardContent";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Typography from "@mui/material/Typography/Typography";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import "./style.css";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardActionArea
        onMouseDown={() => {
          toggleTodo(todo);
        }}
      >
        <CardContent className="todo-item">
          <Typography variant="body1">
            <FormControlLabel
              control={<Checkbox />}
              checked={todo.complete}
              label={todo.text}
              style={{
                textDecoration: todo.complete ? "line-through" : undefined,
              }}
            />
          </Typography>
          <DeleteIcon />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
