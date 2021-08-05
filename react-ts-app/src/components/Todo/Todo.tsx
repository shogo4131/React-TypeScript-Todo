import React, { useState, useEffect, useCallback } from 'react';
import { Box, Grid } from '@material-ui/core';
import { TodoItems, TodoInput } from './index';
import { DeleteDialog } from '../Dialog/index';
import { TodoList } from '../../types/Type';

const Todo: React.VFC = () => {
  const [open, setOpen] = useState(false);
  const [todoInput, setTodoInput] = useState('');
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [todo, setTodo] = useState<TodoList[]>([]);

  useEffect(() => {
    const res = require('../../dummyData/todo.json');

    setTodo(res);
  }, []);

  /* Todo入力変更検知 */
  const changeAddInputHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTodoInput(e.target.value);
    },
    []
  );

  /* 追加ボタン押下 */
  const clickAddButton = useCallback(() => {
    console.log('success');
  }, []);

  /* 削除ボタン押下 */
  const clickOpenButton = useCallback((id: number) => {
    setOpen(true);
    setDeleteId(id);
  }, []);

  /* ×ボタン押下 */
  const clickCloseButton = useCallback(() => setOpen(false), []);

  /* モーダル削除ボタン押下 */
  const clickDeleteButton = useCallback(() => {
    console.log(deleteId);
  }, [deleteId]);

  return (
    <>
      <Box mt={10}>
        <TodoInput
          todoInput={todoInput}
          clickAdd={clickAddButton}
          changeAddInput={changeAddInputHandler}
        />
        {todo.map((todoItem: TodoList) => (
          <TodoItems
            todoItems={todoItem}
            clickOpen={clickOpenButton}
            key={todoItem.id}
          />
        ))}
      </Box>
      <DeleteDialog
        open={open}
        clickClose={clickCloseButton}
        clickDelete={clickDeleteButton}
      />
    </>
  );
};

export default Todo;
