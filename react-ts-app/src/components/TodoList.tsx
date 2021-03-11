import React, { FC, useState, useEffect } from 'react';
import { Box, Card } from '@material-ui/core';
import TodoItems from './TodoItems';
import dummyData from '../dummyData/todo.json';

const TodoList = () => {
  const [todo, setTodo] = useState(dummyData);

  return (
    <Box mt={10}>
      <Card>
        {todo.map((todoItem, index) => (
          <TodoItems todoItems={todoItem} key={index} />
        ))}
      </Card>
    </Box>
  );
};

export default TodoList;
