import React, { useState } from "react";
import Button from "@mui/material/Button/Button";
import TextField from "@mui/material/TextField/TextField";

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState("");

  return (
    <form>
      <TextField
        id="outlined-basic"
        label="Todo"
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <br />
      <Button
        sx={{ mt: 2, mb: 4 }}
        variant="outlined"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addTodo(text);
          setText("");
        }}
      >
        Add Todo
      </Button>
    </form>
  );
};
