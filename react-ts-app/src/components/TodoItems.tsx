import React, { FC } from 'react';
import { Grid, Button } from '@material-ui/core';
import { Todo } from '../Type';

type TodoListProps = {
  todoItems: Todo;
};

const TodoItems: FC<TodoListProps> = ({ todoItems }) => {
  return (
    <Grid container justify="center" spacing={10}>
      <Grid item>{todoItems.todo}</Grid>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="contained" color="primary" size="small">
              編集
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" size="small">
              削除
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TodoItems;
