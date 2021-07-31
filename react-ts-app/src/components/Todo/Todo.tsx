import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@material-ui/core';
import { TodoItems, TodoInput } from './index';

const Todo: React.VFC = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const response = require('../../dummyData/todo.json');

    setTodo(response);
  }, []);

  return (
    <>
      <Box mt={10}>
        <TodoInput />
        {todo.map((todoItem, index) => (
          <TodoItems todoItems={todoItem} key={index} />
        ))}
      </Box>
    </>
  );
};

export default Todo;
