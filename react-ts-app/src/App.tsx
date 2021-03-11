import React, { FC, Fragment } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';

const App: FC = () => {
  return (
    <Fragment>
      <Header />
      <TodoList />
    </Fragment>
  );
};

export default App;
