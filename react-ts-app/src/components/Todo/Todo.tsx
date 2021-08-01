import React, { useState, useEffect, useCallback } from 'react';
import { Box, Grid } from '@material-ui/core';
import { TodoItems, TodoInput } from './index';
import { DeleteDialog } from '../Dialog/index';
import { TodoList } from '../../types/Type';

const Todo: React.VFC = () => {
  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState<TodoList[]>([]);

  useEffect(() => {
    const response = require('../../dummyData/todo.json');

    setTodo(response);
  }, []);

  /* 削除ボタン押下 */
  const clickOpenButton = useCallback(() => setOpen(true), []);

  /* ×ボタン押下 */
  const clickCloseButton = useCallback(() => setOpen(false), []);

  return (
    <>
      <Box mt={10}>
        <TodoInput />
        {todo.map((todoItem: TodoList) => (
          <TodoItems
            todoItems={todoItem}
            clickOpen={clickOpenButton}
            key={todoItem.id}
          />
        ))}
      </Box>
      <DeleteDialog open={open} clickClose={clickCloseButton} />
    </>
  );
};

export default Todo;
