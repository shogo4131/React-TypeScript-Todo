import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { Header } from 'components/Header/index';
import { Todo } from './components/Todo/index';

const App: React.VFC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Todo />
    </>
  );
};

export default App;
