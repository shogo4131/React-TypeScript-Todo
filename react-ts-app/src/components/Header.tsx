import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">ReactTODO</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
