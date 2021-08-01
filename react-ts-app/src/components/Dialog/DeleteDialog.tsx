import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  Typography,
  DialogActions,
  Button,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { DIALOG_TITLE_COLOR } from '../../constants/commonStyle';

interface DialogProps {
  open: boolean;
  clickClose: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      backgroundColor: DIALOG_TITLE_COLOR,
      color: 'white',
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(0.5),
      top: theme.spacing(0.5),
    },
  })
);

const DeleteDialog: React.VFC<DialogProps> = React.memo(
  ({ open, clickClose }) => {
    const classes = useStyles();

    return (
      <Dialog open={open}>
        <DialogTitle className={classes.title}>
          <Typography>削除確認</Typography>
          <IconButton className={classes.closeButton} onClick={clickClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography>本当にこのTodoを削除しますか？</Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" size="small">
            削除
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
);

export default DeleteDialog;
