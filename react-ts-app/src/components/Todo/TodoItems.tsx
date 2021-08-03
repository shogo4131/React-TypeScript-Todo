import React, { useState } from 'react';
import { Grid, Button, TextField } from '@material-ui/core';
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

    const [selectedTodo, setSelectedTodo] = useState('');

    /* 編集ボタン押下 */
    const clickEditButton = (todo: string) => setSelectedTodo(todo);

    /* 編集内容入力検知 */
    const changeEditInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    };

    return (
      <Grid container className={classes.root}>
        <Grid item className={classes.item}>
          {selectedTodo === '' ? (
            todoItems.todo
          ) : (
            <TextField
              variant="outlined"
              size="small"
              defaultValue={selectedTodo}
              onChange={changeEditInputHandler}
            />
          )}
        </Grid>
        <Grid item className={classes.item}>
          <Grid container spacing={1}>
            {selectedTodo === '' ? (
              <>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => clickEditButton(todoItems.todo)}
                  >
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
              </>
            ) : (
              <>
                <Grid item>
                  <Button variant="contained" color="primary" size="small">
                    更新
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" size="small">
                    戻る
                  </Button>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    );
  }
);

export default TodoItems;
