import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface InputProps {
  todoInput: string;
  changeAddInput: React.ChangeEventHandler<HTMLInputElement>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      width: 300,
    },
  })
);

const TodoInput: React.VFC<InputProps> = React.memo(
  ({ todoInput, changeAddInput }) => {
    const classes = useStyles();

    return (
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <TextField
            label="Todo追加"
            variant="outlined"
            size="small"
            defaultValue={todoInput}
            className={classes.input}
            onChange={changeAddInput}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            追加
          </Button>
        </Grid>
      </Grid>
    );
  }
);

export default TodoInput;
