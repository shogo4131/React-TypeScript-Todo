import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { TodoList } from '../../types/Type';

interface TodoListProps {
  todoItems: TodoList;
  clickOpen: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '30%',
      margin: '20px auto',
    },
    item: {
      flex: 1,
    },
  })
);

const TodoItems: React.VFC<TodoListProps> = React.memo(
  ({ todoItems, clickOpen }) => {
    const classes = useStyles();

    return (
      <Grid container className={classes.root}>
        <Grid item className={classes.item}>
          {todoItems.todo}
        </Grid>
        <Grid item className={classes.item}>
          <Grid container spacing={1}>
            <Grid item>
              <Button variant="contained" color="primary" size="small">
                編集
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={clickOpen}
              >
                削除
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
);

export default TodoItems;
