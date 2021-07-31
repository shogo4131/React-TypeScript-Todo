import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      width: 300,
    },
  })
);

const TodoInput: React.VFC = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item>
        <TextField
          label="Todo追加"
          variant="outlined"
          size="small"
          className={classes.input}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary">
          追加
        </Button>
      </Grid>
    </Grid>
  );
};

export default TodoInput;
