import React from "react";
import Card from "@mui/material/Card/Card";
import CardActionArea from "@mui/material/CardActionArea/CardActionArea";
import CardContent from "@mui/material/CardContent/CardContent";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Typography from "@mui/material/Typography/Typography";

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
        <CardContent>
          <Typography variant="body1" gutterBottom>
            <FormControlLabel
              control={<Checkbox />}
              checked={todo.complete}
              label={todo.text}
              style={{
                textDecoration: todo.complete ? "line-through" : undefined,
              }}
            />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
