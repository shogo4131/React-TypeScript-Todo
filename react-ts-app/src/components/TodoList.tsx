import React, { FC, useState, useEffect } from 'react';
import { Box, Card } from '@material-ui/core';
import TodoItems from './TodoItems';

const TodoList: FC = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const response = require('../dummyData/todo.json');

    setTodo(response);
  }, []);

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
