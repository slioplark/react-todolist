import React, { useState } from "react";
import TodoItem from './TodoItem';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import AddIcon from '@material-ui/icons/Add';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import CardContent from '@material-ui/core/CardContent';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '512px',
  }
}));

const TodoList = () => {

  const classes = useStyles();

  const [todo, setTodo] = useState('');
  const [list, setList] = useState([]);

  const createTodo = (e) => {
    setList([...list, todo]);
    setTodo('');
  }

  const updateTodo = (e) => {
    setTodo(e.target.value);
  }

  const deleteTodo = (i) => {
    const tempList = list.filter((item, index) => index !== i);
    setList(tempList);
  }

  return (
    <Card className={classes.root}>
      <CardHeader title="Todo List"></CardHeader>
      <CardContent>
        <Input
          fullWidth
          value={todo}
          onChange={updateTodo}
          placeholder="Add New Item"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                color="primary"
                onClick={createTodo}
              >
                <AddIcon />
              </IconButton>
            </InputAdornment>
          }
        />
        {
          list.map((item, index) => (
            <TodoItem
              key={item}
              value={item}
              index={index}
              deleteTodo={deleteTodo}
            />
          ))
        }
      </CardContent>
    </Card>
  );

};

export default TodoList;