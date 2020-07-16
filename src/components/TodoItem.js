import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

const TodoItem = ({ index, value, deleteTodo }) => {

  const [todo, setTodo] = useState(value);

  const updateTodo = (e) => {
    setTodo(e.target.value);
  }

  return (
    <Input
      fullWidth
      value={todo}
      onChange={updateTodo}
      startAdornment={
        <Checkbox
          color="primary"
        />
      }
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            color="secondary"
            onClick={() => deleteTodo(index)}
          >
            <ClearIcon />
          </IconButton>
        </InputAdornment>
      }
    />
  );

};

export default TodoItem;