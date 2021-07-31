import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Todo } from '../../types/Type';

interface TodoListProps {
  todoItems: Todo;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '30%',
      margin: '20px auto',
    },
    flex: {
      flex: 1,
    },
  })
);

const TodoItems: React.VFC<TodoListProps> = ({ todoItems }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.flex}>
        {todoItems.todo}
      </Grid>
      <Grid item>
        <Grid item className={classes.flex}>
          <Button variant="contained" color="primary" size="small">
            削除
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TodoItems;
