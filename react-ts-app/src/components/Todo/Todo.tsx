import React, { useState, useEffect, useCallback } from 'react';
import { Box, Grid } from '@material-ui/core';
import { TodoItems, TodoInput } from './index';
import { DeleteDialog } from '../Dialog/index';
import { TodoList } from '../../types/Type';

const Todo: React.VFC = () => {
  const [open, setOpen] = useState(false);
  const [todoInput, setTodoInput] = useState('');
  const [todo, setTodo] = useState<TodoList[]>([]);

  useEffect(() => {
    const response = require('../../dummyData/todo.json');

    setTodo(response);
  }, []);

  /* Todo入力変更検知 */
  const changeAddInputHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTodoInput(e.target.value);
    },
    []
  );

  /* 追加ボタン押下 */
  const clickAddButton = () => {};

  /* 編集ボタン押下 */
  const clickEditButton = useCallback((id: number) => {
    console.log(id);
  }, []);

  /* 削除ボタン押下 */
  const clickOpenButton = useCallback(() => setOpen(true), []);

  /* ×ボタン押下 */
  const clickCloseButton = useCallback(() => setOpen(false), []);

  return (
    <>
      <Box mt={10}>
        <TodoInput
          todoInput={todoInput}
          changeAddInput={changeAddInputHandler}
        />
        {todo.map((todoItem: TodoList) => (
          <TodoItems
            todoItems={todoItem}
            clickOpen={clickOpenButton}
            clickEdit={clickEditButton}
            key={todoItem.id}
          />
        ))}
      </Box>
      <DeleteDialog open={open} clickClose={clickCloseButton} />
    </>
  );
};

export default Todo;
